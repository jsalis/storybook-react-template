import "./avatar.css";

export function Avatar({ src, alt, fallback }) {
    return (
        <div className="avatar-root">
            <img className="avatar-image" src={src} alt={alt} />
        </div>
    );
}
