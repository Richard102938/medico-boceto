// Encontrar los elementos por su id
const flags_element = document.getElementById('flags');

// Encontrar los textos para cambiar
const text_to_change = document.querySelectorAll("[data-section]");

// Obtener el valor del data-language
flags_element.addEventListener("click", (e) => {
    change_language(e.target.parentElement.dataset.language);

    // let local_language = e.target.parentElement.dataset.language;

    // localStorage.setItem("local_language", local_language);
});

// Funcion para cambiar el lenguage
const change_language = async (language) => {
    const request_json = await fetch(`../languages/${language}.json`);
    const text = await request_json.json();

    for (const change of text_to_change) {
        const section = change.dataset.section;
        const value = change.dataset.value;

        change.innerHTML = text[section][value];
    }
}