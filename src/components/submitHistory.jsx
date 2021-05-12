const SubmitHistory = ({show,data}) => {

    console.log(data);

    const objToString = obj => {
        if (!obj.length) { return null; }

        const keys = Object.keys(obj[0]);
        return (
        <table>
            <tr>
                {keys.map(k =><th key={k}>{k}</th>)}
            </tr>
            {obj.map((entry) => (
                <tr>
                    {keys.map(k => <td>{entry[k]}</td>)}
                </tr>
            ))}
        </table>
        );
    }

    return (
        <div>
            { show && objToString(data) }
        </div>
    );
}

export default SubmitHistory;