import SplineBlob from "../assets/blobs2.png";
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
            <img src={SplineBlob} alt={""} className={"profileSection"}/>
        </div>
    );
}