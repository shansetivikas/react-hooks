import { useActionState } from "react"

export default function ActionComponent() {

    const submitUser = async(prevState, formData) => {
        let name = formData.get('name');
        let email = formData.get('email');

        return {
            name: name,
            email: email
        }

    }

    const [state, formAction, isPending] = useActionState(submitUser, undefined)
    console.log(isPending)
    return (
        <form action={formAction}>
            <label for="name" id="label-name"> Name </label>
            <input type="text" id="name" name="name" /><br />
            <label for="email" id="label-email">Email</label> 
            <input type="email" id="email" name="email" />
            <button type="submit">Submit</button>
            {!isPending && (<ul>
                    <li>Name: {state?.name}</li>
                    <li>Email: {state?.email}</li>
                </ul>)}
        </form>
    )
}