function run(){
    var search = document.getElementById('input_field').value;

    //alert(search);

    const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'c3e7e0f9a2msh9541025fef72972p19b90ejsn2b4a44807bbe',
        'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
    },
    body: '{"text":"'+search+'"}'
    };
    
    fetch('https://chatgpt-ai-chat-bot.p.rapidapi.com/ask', options)
    .then(response => response.text())
    .then(response =>  boxvalue = document.getElementById('input_field1').value = response )
    .catch(err => boxvalue = document.getElementById('input_field1').value = console.error(err));
}
