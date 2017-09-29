function displayOverview(content)
{
    var tableDiv = document.getElementById("overview");
    var tableBeginString = "<table id=\"overviewTable\">\n    <colgroup>\n        <col id=\'heading\'>\n    </colgroup>";
    var tableEndString = "</table>";
    tableDiv.innerHTML = tableBeginString + content + tableEndString;
}

function getNotes(callback)
{
    var httpReq = new XMLHttpRequest();

    httpReq.onreadystatechange = function ()
    {
        if(httpReq.readyState === 4 && httpReq.status === 200) // Verbindung steht
        {
            callback(httpReq.responseText);
        }
    }
}

window.onload = function ()
{
    getNotes(displayOverview);
};