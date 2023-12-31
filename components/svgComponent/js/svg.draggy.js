(function () {
    SVG.extend(SVG.Element, {
        draggy: function (constraint) {
            var start, drag, end, element = this;
            if (typeof this.fixed === "function") {
                this.fixed()
            }
            constraint = constraint || {};
            start = function (event) {
                var parent = this.parent(SVG.Nested) || this.parent(SVG.Doc);
                event = event || window.event;
                if (element.beforedrag) {
                    element.beforedrag(event)
                }
                var box = element.bbox();
                if (element instanceof SVG.G) {
                    box.x = element.x();
                    box.y = element.y()
                } else if (element instanceof SVG.Nested) {
                    box = {x: element.x(), y: element.y(), width: element.width(), height: element.height()}
                }
                element.startEvent = event;
                element.startPosition = {
                    x: box.x,
                    y: box.y,
                    width: box.width,
                    height: box.height,
                    zoom: parent.viewbox().zoom,
                    rotation: element.transform("rotation") * Math.PI / 180
                };
                SVG.on(window, "mousemove", drag);
                SVG.on(window, "touchmove", drag);
                SVG.on(window, "mouseup", end);
                SVG.on(window, "touchend", end);
                element.node.dispatchEvent(new CustomEvent("dragstart", {detail: {event: event, delta: {x: 0, y: 0}}}));
                if (event.preventDefault) {
                    event.preventDefault()
                } else {
                    event.returnValue = false
                }
            };

            function elmZoom(elm) {
                if (!elm || typeof elm.transform !== "function") {
                    return {x: 1, y: 1}
                }
                var p = elm.parent();
                var t = elm.transform();
                pz = {};
                var pz = elmZoom(p);
                return {x: t.scaleX * pz.x, y: t.scaleY * pz.y}
            }

            drag = function (event) {
                event = event || window.event;
                if (element.startEvent) {
                    var x, y, rotation = element.startPosition.rotation, width = element.startPosition.width,
                        height = element.startPosition.height,
                        delta = {x: event.pageX - element.startEvent.pageX, y: event.pageY - element.startEvent.pageY};
                    if (/^touchstart|touchmove$/.test(event.type)) {
                        delta.x = event.touches[0].pageX - element.startEvent.touches[0].pageX;
                        delta.y = event.touches[0].pageY - element.startEvent.touches[0].pageY
                    } else if (/^click|mousedown|mousemove$/.test(event.type)) {
                        delta.x = event.pageX - element.startEvent.pageX;
                        delta.y = event.pageY - element.startEvent.pageY
                    }
                    delta.scale = elmZoom(element);
                    x = element.startPosition.x + (delta.x * Math.cos(rotation) + delta.y * Math.sin(rotation)) / Math.pow(delta.scale.x, 1);
                    y = element.startPosition.y + (delta.y * Math.cos(rotation) + delta.x * Math.sin(-rotation)) / Math.pow(delta.scale.y, 1);
                    if (typeof constraint === "function") {
                        var coord = constraint(x, y);
                        if (typeof coord === "object") {
                            if (typeof coord.x !== "boolean" || coord.x) {
                                x = typeof coord.x === "number" ? coord.x : x;
                                element.x(x)
                            } else {
                                x = element.x()
                            }
                            if (typeof coord.y !== "boolean" || coord.y) {
                                y = typeof coord.y === "number" ? coord.y : y;
                                element.y(y)
                            } else {
                                y = element.y()
                            }
                        } else if (typeof coord === "boolean" && coord) {
                            element.move(x, y)
                        } else {
                            x = element.x();
                            y = element.y()
                        }
                    } else if (typeof constraint === "object") {
                        if (constraint.minX !== null && x < constraint.minX) {
                            x = constraint.minX
                        } else if (constraint.maxX !== null && x > constraint.maxX - width) {
                            x = constraint.maxX - width
                        }
                        if (constraint.minY !== null && y < constraint.minY) {
                            y = constraint.minY
                        } else if (constraint.maxY !== null && y > constraint.maxY - height) {
                            y = constraint.maxY - height
                        }
                        element.move(x, y)
                    }
                    delta.movedX = x - element.startPosition.x;
                    delta.movedY = y - element.startPosition.y;
                    element.node.dispatchEvent(new CustomEvent("dragmove", {detail: {delta: delta, event: event}}))
                }
            };
            end = function (event) {
                event = event || window.event;
                var delta = {
                    x: event.pageX - element.startEvent.pageX,
                    y: event.pageY - element.startEvent.pageY,
                    zoom: element.startPosition.zoom
                };
                element.startEvent = null;
                element.startPosition = null;
                SVG.off(window, "mousemove", drag);
                SVG.off(window, "touchmove", drag);
                SVG.off(window, "mouseup", end);
                SVG.off(window, "touchend", end);
                element.node.dispatchEvent(new CustomEvent("dragend", {detail: {delta: {x: 0, y: 0}, event: event}}))
            };
            element.on("mousedown", start);
            element.on("touchstart", start);
            element.fixed = function () {
                element.off("mousedown", start);
                element.off("touchstart", start);
                SVG.off(window, "mousemove", drag);
                SVG.off(window, "touchmove", drag);
                SVG.off(window, "mouseup", end);
                SVG.off(window, "touchend", end);
                start = drag = end = null;
                return element
            };
            return this
        }
    })
}).call(this);