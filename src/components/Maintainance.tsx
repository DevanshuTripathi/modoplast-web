import React, { useEffect, useRef, useState } from "react";

type Props = {
    contact?: string; // e.g. "admin@example.com" or "IT support"
    open?: boolean; // controlled visibility
    onClose?: () => void; // called when user dismisses popup
};

const Maintainance: React.FC<Props> = ({ contact = "the administrator", open = true, onClose }) => {
    const [visible, setVisible] = useState<boolean>(open ?? true);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    const titleId = "maintenance-title";

    useEffect(() => {
        if (open !== undefined) setVisible(open);
    }, [open]);

    useEffect(() => {
        if (visible) closeBtnRef.current?.focus();
    }, [visible]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        if (visible) document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);

    const handleClose = () => {
        if (onClose) onClose();
        else setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-labelledby={titleId}
            aria-modal={true}
            style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.35)",
                zIndex: 1000,
                padding: 16,
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    width: 360,
                    height: 360,
                    maxWidth: "90vw",
                    maxHeight: "90vh",
                    background: "#fff",
                    color: "#222",
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    boxSizing: "border-box",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    borderRadius: 12,
                    position: "relative",
                    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
                    textAlign: "center",
                }}
            >
                {/* Close button (top-right) */}
                <button
                    ref={closeBtnRef}
                    onClick={handleClose}
                    aria-label="Close maintenance dialog"
                    style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        background: "transparent",
                        border: "none",
                        color: "#444",
                        fontSize: 20,
                        cursor: "pointer",
                        padding: 6,
                        lineHeight: 1,
                    }}
                >
                    ✕
                </button>

                {/* Maintenance icon (large centered square-friendly icon) */}
                    <svg
                        viewBox="0 0 120 120"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                    >
                        <style type="text/css">{`
                        .st0 { fill: #6BCB77; }
                        .st1 { fill: #E8E9EA; }
                        .st2 { fill: #4D96FF; }
                        `}</style>
                        <g>
                        <path
                            className="st0"
                            d="M66.7,31.5c-0.2-0.8,0-1.7,0.6-2.3l11.6-11.6c0.6-0.6,1.5-0.8,2.3-0.6l8.2,2.2l-9.3,9.3
                            c-0.6,0.6-0.8,1.5-0.6,2.3l1.7,6.4c0.2,0.8,0.9,1.5,1.7,1.7l6.4,1.7c0.8,0.2,1.7,0,2.3-0.6l9.3-9.3l2.2,8.2c0.2,0.8,0,1.7-0.6,2.3
                            L90.8,52.7c-0.6,0.6-1.5,0.8-2.3,0.6l-9.6-2.6L50.8,78.9l2.6,9.6c0.2,0.8,0,1.7-0.6,2.3l-11.6,11.6c-0.6,0.6-1.5,0.8-2.3,0.6
                            l-8.2-2.2l9.3-9.3c0.6-0.6,0.8-1.5,0.6-2.3l-1.7-6.4c-0.2-0.8-0.9-1.5-1.7-1.7l-6.4-1.7c-0.8-0.2-1.7,0-2.3,0.6l-9.3,9.3L17,81.2
                            c-0.2-0.8,0-1.7,0.6-2.3l11.6-11.6c0.6-0.6,1.5-0.8,2.3-0.6l9.6,2.6l28.1-28.1L66.7,31.5z"
                        />
                        <g>
                            <polygon
                            className="st1"
                            points="102.4,98.1 98.1,102.4 92.5,99.3 91,95.4 56.2,60.6 60.6,56.2 95.3,90.9 99.2,92.4"
                            />
                            <path
                            className="st2"
                            d="M55.9,42.4L31.5,18c-0.6-0.6-1.6-0.5-2.3,0.1L18.1,29.2c-0.7,0.7-0.7,1.7-0.1,2.3l24.4,24.4
                            c0.6,0.6,1.6,0.5,2.3-0.1h0c0.7-0.7,1.7-0.7,2.3-0.1l0.6,0.6c0.6,0.6,0.5,1.6-0.1,2.3l0,0c-0.7,0.7-0.7,1.7-0.1,2.3l5.9,5.9
                            c0.6,0.6,1.6,0.5,2.3-0.1l11.1-11.1c0.7-0.7,0.7-1.7,0.1-2.3l-5.9-5.9c-0.6-0.6-1.6-0.5-2.3,0.1l0,0c-0.7,0.7-1.7,0.7-2.3,0.1
                            L55.6,47c-0.6-0.6-0.5-1.6,0.1-2.3l0,0C56.4,44,56.5,43,55.9,42.4z"
                            />
                        </g>
                        </g>
                    </svg>
                <div id={titleId} style={{ fontWeight: 700, fontSize: 18 }}>
                    Site under maintenance
                </div>
                <div style={{ fontSize: 14, color: "#444", maxWidth: "80%" }}>
                    We're performing scheduled maintenance. For more details, contact {contact}.
                </div>
            </div>
        </div>
    );
};

export default Maintainance;
