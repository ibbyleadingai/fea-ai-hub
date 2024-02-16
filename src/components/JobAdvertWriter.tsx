
export default function JobAdvertWriter(){
    window.scrollTo = function () {};
    return(
        <div>
            <h2>Job Advert Writer</h2>
            <iframe src="https://laisandbox.azurewebsites.net/"
            width="980" height="600" allow="fullscreen" title="TRI AI Assistant"
            sandbox="allow-same-origin allow-scripts"></iframe>
            {/* <object data="https://laisandbox.azurewebsites.net/" width="980" height="600">
            <embed src="https://laisandbox.azurewebsites.net/" width="980" height="600"></embed>
            </object> */}
        </div>
    )
}