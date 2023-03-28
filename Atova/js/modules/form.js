import { postData } from "../services/services";

function form() {
    const forms = document.querySelectorAll('form')

    forms.forEach(item => {
        dindPostData(item)
    })

    function dindPostData(form) {
        
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const formData = new FormData(form)

            const obj = {}
            formData.forEach((value, key) => {
                obj[key] = value
            })

            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
            }).catch(() => {
                console.log('error');
            }).finally(() => {
                form.reset()
            })
        })
        
    }
}

export default form;