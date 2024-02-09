/**
 * Executes when the DOM content is loaded.
 * Initializes the SVG animation and handles animation completion.
 */
document.addEventListener("DOMContentLoaded", () => {
    // Get SVG elements
    const svgElement = document.getElementById("helloWorld");
    const helloOutline = document.getElementById("helloOutline");
    const worldOutline = document.getElementById("worldOutline");
    const helloBg = document.getElementById("helloBg");
    const worldBg = document.getElementById("worldBg");

    // Constants for colours and timings
    const transparentBlack = "rgba(0, 0, 0, 0)";
    const fillBlack = "rgba(0, 0, 0, 1)";

    /**
     * Callback function to execute when the animation is complete.
     * Changes the fill colors of SVG elements with a fade effect.
     */
    const onComplete = () => {
        console.log("Animation complete");
        // Additional code to execute when the animation is complete
        // Fading in different SVG elements with specified timing and colours
        fadeFill({ element: helloOutline, transitionTime: 1.2 });
        fadeFill({ element: worldOutline });
        fadeFill({
            element: helloBg,
            transparentColour: transparentBlack,
            fillColour: fillBlack,
            transitionTime: 2,
        });
        fadeFill({
            element: worldBg,
            transparentColour: transparentBlack,
            fillColour: fillBlack,
            transitionTime: 2.2,
        });
    };

    /**
     * Applies a fade effect to the fill color of an SVG element.
     * @param {Object} options - Options for the fade effect.
     * @param {HTMLElement} options.element - The SVG element to apply the fade effect.
     * @param {string} [options.transparentColour="rgba(255, 255, 255, 0)"] - The transparent colour for the fade effect.
     * @param {string} [options.fillColour="rgba(255, 255, 255, 1)"] - The fill colour after the fade effect.
     * @param {number} [options.transitionTime=1] - The duration of the fade effect transition in seconds.
     */
    const fadeFill = ({
        element,
        transparentColour = "rgba(255, 255, 255, 0)",
        fillColour = "rgba(255, 255, 255, 1)",
        transitionTime = 1,
    }) => {
        // Set initial opacity to 0
        element.style.fill = transparentColour;
        // Apply transition for smooth fade
        element.style.transition = `fill ${transitionTime}s cubic-bezier(0.79, 0.33, 0.14, 0.53)`;
        // Set final opacity to 1 after a short delay
        setTimeout(() => {
            element.style.fill = fillColour;
        }, 100);
    };

    // Initialize Vivus SVG animation
    const vivus = new Vivus(svgElement, { duration: 200 }, onComplete);
    vivus.play();

    // Check if animation is complete
    vivus.getStatus() === "end"
        ? console.log("Animation complete!")
        : console.log("Animation in progress...");
});
