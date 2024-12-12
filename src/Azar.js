import React ,{useState}from 'react'

function Azar(){
    const Fruits=[
        {name:"Apple",price:20,key:1},
        {name:"Mango",price:30,key:2},
        {name:"Papaya",price:50,key:3},
        {name:"Guava",price:40,key:4},
        {name:"Orange",price:35,key:5}
    ];

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleSearch = () => {
        const foundFruit = Fruits.find(fruit => fruit.name.toLowerCase() === searchValue.toLowerCase());
        if(foundFruit){
            setSearchResult(`${foundFruit.name} -Rs.${foundFruit.price}`)
        }else{
            setSearchResult('Fruit not Found')
        }
    };
    
    return(
    <div className='fruit' style={{margin:"100px 500px"}}>
        {searchResult===null ?(
        <div>
            <h1>List of Fruits</h1>
            {Fruits.map(f => (<p key={f.key}>{f.key} . {f.name}  Rs.{f.price}</p>))}
        </div>):(
        <div id='se' style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
            {searchResult}
        </div>)
        }
        <div>
            <h1>Search Fruit</h1>
            <p><input type='text' 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}/></p>
            <button onClick={handleSearch}>Search</button>
        </div>
        
        
    </div>

    )
}

export default Azar