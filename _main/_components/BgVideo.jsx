export default function BgVideo({children, ...props}) {
    return (
        <div 
            style={{display: "flex", flexDirection: "column", maxWidth: "100vw", width: "100vw", height: "calc(100vw / 1.777)", maxHeight: "700px", justifyContent: "center", position: "relative", overflow: "hidden", 
            boxShadow: "0px 10px 25px 0px rgba(0,0,0,0.54)", ...props.style}} >
            {children}
        </div>
    )
}