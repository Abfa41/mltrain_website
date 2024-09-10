import React from 'react';

import { useActiveHeading } from './useActiveHeading';


// const tocItems = [
//   { id: 'example-usage', title: 'Example Usage' },
//   { id: 'overview', title: 'Overview' },
//   { id: 'hyperparameters', title: 'Hyperparameters' },
//   // Add other sections...
// ];

const TableOfContents = ({myList}) => {
  const activeId = useActiveHeading(myList.map(item => item.id)); // Use hook to get the active heading

  return (
    <nav style={{marginTop: '2vh',marginLeft: '2vh',marginRight: '2vh',position: 'sticky'}}>
      <h3>On This Page</h3>
      <ul>
        {myList.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              style={{
                color: activeId === item.id ? 'blue' : 'black',
                fontWeight: activeId === item.id ? 'bold' : 'normal',
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        nav {
          position: sticky;
          top: 20px;
          width: 10%;
        }

        ul {
          list-style: none;
          padding: 10px;
          margin-top: 10px
        }

        li {
          margin-bottom: 8px;
        }

        a {
          text-decoration: none;
          color: black;
        }

        a:hover {
          text-decoration: underline;
        }

        @media only screen and (max-width: 1136px) {
    nav{
        display: none;
    }
    
}
      `}</style>
    </nav>
  );
};

export default TableOfContents;
