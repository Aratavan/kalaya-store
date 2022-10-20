import Line from "@modules/common/line"

const AccountDetails = () => {
    return (
        <>
            <div className="container mx-auto font-nunito">
                <div className="grid grid-cols-5 gap-4 text-xl font-bold leading-10 my-8 ml-10">
                    <div className="left-details">
                        <p>Account holder</p>
                        <p>Email ID</p>
                        <p>Contact details</p>
                        <p>Address</p>
                    </div>
                    <div className="col-span-3 right-details">
                        <p>: John Smith</p>
                        <p>: johnsmith@gmail.com</p>
                        <p>: +1 (555) 555-1234.</p>
                        <p>: 132, My Street, Kingston,  New York 12401</p>
                    </div>
                    <div className="underline" style={{ position: 'absolute', bottom: '0', right: '15rem' }}><a href="">EDIT</a></div>
                </div>
            </div>
            <Line />
        </>
    )
}

export default AccountDetails