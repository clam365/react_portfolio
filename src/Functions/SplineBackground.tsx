import SplineBlob from "../assets/blobs2.png";
import SplineBlob2 from "../assets/blob1.png";
import SplineBlob3 from "../assets/blob3.png";
import React, {useEffect, useRef} from "react";

export default function SplineBackground() {

    const splineBlobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            const { clientX, clientY } = e;
            const blobContainer = splineBlobRef.current;

            if (blobContainer) {
                const blobRect = (blobContainer as unknown as HTMLElement).getBoundingClientRect();
                const offsetX = (clientX - blobRect.left) / blobRect.width;
                const offsetY = (clientY - blobRect.top) / blobRect.height;

                // Adjust the movement range as needed
                const movementRange = 20;

                // Calculate the new position based on cursor movement
                const newX = offsetX * movementRange;
                const newY = offsetY * movementRange;

                blobContainer.style.transform = `translate(${newX}px, ${newY}px)`;
            }
        };


        window.addEventListener('mousemove', handleMouseMove);

        return () => {

            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div
                id="splineBlob"
                ref={splineBlobRef}
                style={{
                    position: 'absolute',
                    top: 200,
                    left: 200,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    pointerEvents: 'none',
                    transition: 'transform 0.2s ease-out' // Optional: Add a smooth transition
                }}
            >
                <img src={SplineBlob} alt={""} className={"profileSection z-0"}/>
                <img src={SplineBlob2} alt={""} className={"profileSection z-0"} style={{
                    position: 'absolute',
                    top: -100,
                    left: -150,
                    zIndex: 0,
                    pointerEvents: 'none',
                    transition: 'transform 0.2s ease-out'
                }}/>
                <img src={SplineBlob3} alt={""} className={"profileSection z-0"} style={{
                    position: 'absolute',
                    top: 150,
                    left: -125,
                    zIndex: 0,
                    pointerEvents: 'none',
                    transition: 'transform 0.2s ease-out'
                }}/>
            </div>

        </div>

    );
}