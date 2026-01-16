function saveTextAsFile() {
    // 1. Get the data from the text area.
    const textToSave = document.getElementById("text-input").value;

    // 2. Create a Blob (Binary Large Object) with the text data and specify the MIME type.
    const textToBLOB = new Blob([textToSave], { type: "text/plain" });
    
    // 3. Define the filename. You can use a static name or a dynamic one.
    const fileName = "user_input.txt"; 

    // 4. Create an anchor element (<a>) to trigger the download.
    const downloadLink = document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.href = window.URL.createObjectURL(textToBLOB);

    // 5. Append the link to the body (necessary for some browsers), click it, and remove it.
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

