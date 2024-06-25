export default function Checkmark({ setFormData, formData }) {
    const boxChecked = formData.acceptRodo === "yes"
    let { acceptRodo } = formData
    function handleClick() {
        if (acceptRodo === "yes") {
            setFormData({ ...formData, acceptRodo: "no" })
            return
        }
        setFormData({ ...formData, acceptRodo: "yes" })
    }
    return (
        <div className="checkmark-box relative w-full h-full min-w-8 min-h-10 max-w-8 max-h-10 mb-[7px] ml-1" onClick={handleClick}>
        {boxChecked ? 
            (<div className="checkmark-container">
            <div className="checkmark-green-animated"></div>
            </div>) :
            <div className="checkmark-border relative w-7 h-7 top-2 left-0 border-2 border-gray-300 rounded-[2px]"></div>
            }
        </div>
    )
}