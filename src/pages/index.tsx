import { useState } from 'react';

export default function Home()
{
    const [ideErrorMessage, setIdeErrorMessage] = useState('');
    const [generatedBinding, setGeneratedBinding] = useState('');

    function generateBinding()
    {
        const bindingGlobalRegex = /<assemblyBinding[^>]+>(.*)<\/assemblyBinding>/g;

        const parsedBinding = bindingGlobalRegex.exec(ideErrorMessage);

        var parsedAndFormatted = parsedBinding[1];
        parsedAndFormatted = parsedAndFormatted.replace(/<\/assemblyBinding><assemblyBinding[^>]+>/g, '\r\n');

        setGeneratedBinding(parsedAndFormatted);
    }

    return <div className="container">
        <div className="row">
            <div className="col">
                <h1>
                    Binding Redirect Generator !
                </h1>
                <i>
                    Because bindings are important ... but annoying !
                </i>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <h2>Step 1 : Input the error message from your IDE</h2>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <textarea className="form-control" rows={15} value={ideErrorMessage} onChange={(e) => setIdeErrorMessage(e.currentTarget.value)}/>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <button type="button" className="btn btn-primary mt-3 w-100" onClick={() => generateBinding()}>Step 2 : Click here !</button>
            </div>
        </div>

        <div className="row">
            <div className="col mt-3">
                <h2>Step 3 : Copy the content below and paste into your .config</h2>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <textarea className="form-control mt3" rows={15} value={generatedBinding} readOnly={true}/>
            </div>
        </div>

        <div className="row">
            <div className="col mt-3">
                <h2>Step 4 : Let your IDE format the XML :)</h2>
            </div>
        </div>

        <div className="row">
            <div className="col mt-3">
                <h2>Step 5 : Buy me a beer !</h2>
            </div>
        </div>

        <div className="row">
            <div className="col mt-3">
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="C9W9F8GW9487U" />
                    <input type="image" src="https://www.paypalobjects.com/fr_FR/BE/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" src="https://www.paypal.com/fr_BE/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </div>
    </div>
}