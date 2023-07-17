const Paragraph = ({ headerType, headerTxt, array }) => {
    let headerSize;

    switch (headerType){
        case "h1":
            headerSize = "md:text-lg text-sm-lg"
            break;
        case "h2":
            headerSize = "md:text-md text-sm-md"
            break;
        default:
            headerSize = "md:text-sm text-sm-sm"
    }

    const header = `<${headerType} class="${headerSize} font-bold mb-sm mt-vlg underline decoration-red underline-offset-4"> ${headerTxt} </${headerType}>`;

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: header }} />
            {
                array.map((el, index) => (
                    <p key={index} className="text-sm-vsm mb-sm"> {el} </p>
                ))
            }
        </>
    );
}

export default Paragraph;