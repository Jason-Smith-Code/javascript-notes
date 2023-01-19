import React from 'react';

function App() {
 return (
   <div>
     <ParentComponent reps={6}>
       <SubComponent
         text="Loading"
         ASCIIChar='_'
         />
     </ParentComponent>
   </div>
)
}

const SubComponent = ({ text, ASCIIChar, ...props }) => {
 return (
   <span {...props}>
    {text}{ASCIIChar}
   </span>
)
};

const ParentComponent = ({ reps, children }) => {
 return ASCIIChar: children.props.ASCIIChar.repeat(reps)
};

export default App;