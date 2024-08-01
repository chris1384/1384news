export default function BodyContent({children, ...props}) {
    return (
        <div 
            style={{display: "flex", flexDirection: "row", maxWidth: "100vw", width: "100vw", minHeight: "100vh", padding: "50px", margin: "0px", justifyContent: "center", overflow: "hidden", ...props.style}}
            {...props} >
            {children}
        </div>
    )
}