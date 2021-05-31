return (
    <div className="App"/>
        <header className="App-header">
            <Card
                author = {recipeAuthor} // OK
                {a, b} = {{a:1, b:2}}   // Error
            />
        </header>
);