import { useState } from 'react';

export default function Home()
{
    const [ideErrorMessage, setIdeErrorMessage] = useState('');
    const [generatedBinding, setGeneratedBinding] = useState('');

    function generateBinding()
    {
        setGeneratedBinding(ideErrorMessage);
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
    </div>
}