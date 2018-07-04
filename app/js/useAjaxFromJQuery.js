const responseProcess = (response, status) => {
    $("#msg").text(`response = ${response}, status =${status}`);
}

const getServerData = () => {
    $("#msg").load("data.json", responseProcess);
}

$(window).load(getServerData);
