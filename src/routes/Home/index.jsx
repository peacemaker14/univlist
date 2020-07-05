import React, { useState } from 'react';
import useSearchUniversities from '../../hooks/useSearchUniversities';
import useDebounce from '../../hooks/useDebounce';
import downloadJSON from '../../helpers/downloadJSON';

const Home = () => {
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');

  useDebounce(() => setSearch(name.trim()), 1000, [name])
  
  const { universities } = useSearchUniversities({ name: search });
  const isUniversities = Array.isArray(universities) && universities.length;

  return (
    <div>
      <div className="section">
        <div className="container">
          <h1>My Universities</h1>
          <input
            name="name"
            value={name}
            className="input" 
            type="text" 
            placeholder="Search..."
            onChange={e => setName(e.target.value)}
          />
          <button 
            onClick={() => downloadJSON(universities)} 
            className="button"
            disabled={!isUniversities}
          >
            Subscribe to newsletter
          </button>
        </div>
      </div>
      <div className="section">
        <div className="container">
          {
            isUniversities ? universities.map((university, key) => (
              <div className="card mb-2" key={key}>
                <div className="card-content">
                  <h3>{university.name}</h3>
                  <span>{university.country}</span>
                  <div>
                    {university.domains.map((domain, i) => (
                      <a href={university.web_pages[i]}>{domain}</a>
                    ))}
                  </div>
                </div>
              </div>
            )) : <span>No Data</span>
          }
        </div>
      </div>
    </div>
  );
}

export default Home;