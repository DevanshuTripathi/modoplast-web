import React from "react";

type Props = {
    contact?: string; // e.g. "admin@example.com" or "IT support"
}

const MaintainanceBar: React.FC<Props> = ({ contact = "the administrator"}) => {

    return (
        <div
            role="dialog"
            aria-label="Site maintenance"
            aria-modal={false}
            style={{
                top: 0,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "100%",
                    background: "#fff3cd",
                    color: "#856404",
                    borderTop: "1px solid #ffeeba",
                    borderBottom: "1px solid #ffeeba",
                    padding: "12px 16px",
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    boxSizing: "border-box",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    fontFamily:
                        "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
                    borderRadius: 0,
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    focusable={false}
                >
                    <path d="M12 2v6" stroke="#856404" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 16v6" stroke="#856404" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="9" stroke="#856404" strokeWidth="2" />
                </svg>

                <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>Site under maintenance</div>
                    <div style={{ fontSize: 13, marginTop: 6 }}>For more details, contact {contact}.</div>
                </div>
            </div>
        </div>
    );
};

export default MaintainanceBar;
