import FormStyles from './Form.module.css';


export default function Form() {
    return (
        <form className={FormStyles.form}>
            <div className={FormStyles.flex_data}>
                <input className={FormStyles.name} placeholder="Name"></input>
                <input className={FormStyles.company} placeholder="Company"></input>
            </div>

            <input className={FormStyles.mail} placeholder="Mail"></input>

            <textarea className={FormStyles.message} placeholder="Give us all the details!"></textarea>

            <button>Send</button>
        </form>
    )
}