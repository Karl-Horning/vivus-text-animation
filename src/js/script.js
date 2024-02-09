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

    /**
     * Callback function to execute when the animation is complete.
     * Changes the fill colors of SVG elements.
     */
    const onComplete = () => {
        console.log("Animation complete");
        // Additional code to execute when the animation is complete
        helloOutline.style.fill = "white";
        worldOutline.style.fill = "white";
        helloBg.style.fill = "rgb(45, 41, 45)";
        worldBg.style.fill = "rgb(45, 41, 45)";
    };

    // Initialize Vivus SVG animation
    const vivus = new Vivus(svgElement, { duration: 200 }, onComplete);
    vivus.play();

    // Check if animation is complete
    vivus.getStatus() === "end"
        ? console.log("Animation complete!")
        : console.log("Animation in progress...");
});
