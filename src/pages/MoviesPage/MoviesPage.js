// import React, { Component } from "react";
// import { getCocktail } from "../../services/cocktailsApi";

// class MoviesPage extends Component {
//   state = {
//     queryValue: "margarita",
//     drinks: [],
//   };
//   componentDidMount() {
//     this.getData();
//   }
//   componentDidUpdate(prevProps, prevState) {
//     // if (prevState.queryValue !== this.state.queryValue) {
//     //   this.getData()
//     // }
//     if (prevProps.myQuery !== this.props.myQuery) {
//       this.getData();
//     }
//   }
//   getData = () => {
//     const { queryValue } = this.state;
//     const { myQuery } = this.props;
//     return getCocktail(myQuery).then((drinks) => {
//       if (drinks !== null) {
//         // this.setState({ drinks })
//         this.props.getMyCocktails(drinks);
//       }
//     });
//   };
//   validateInput = (value) => {
//     if (value.trim() !== "") {
//       //   this.setState({ queryValue: value })
//       this.props.getMyQuery(value);
//     }
//   };
//   onSubmit = (e) => {
//     e.preventDefault();
//     const { queryValue } = e.target;
//     this.validateInput(queryValue.value);
//     queryValue.value = "";
//   };
//   toggleModal = () => {
//     const { myModal, myChangeModal } = this.props;
//     console.log(myModal);
//     return myChangeModal(!myModal);
//   };
//   render() {
//     const { toggleModal } = this;
//     const { drinks } = this.state;
//     const { myModal, myCocktails } = this.props;
//     return (
//       <>
//         <form onSubmit={this.onSubmit}>
//           <input type="text" name="queryValue" placeholder="your drink" />
//         </form>
//         <button onClick={toggleModal}>{`click ${myModal}`}</button>
//         <h1>Coctails Page</h1>
//         <ul>
//           {myCocktails.map((drink) => {
//             return <li key={drink.idDrink}>{drink.strDrink}</li>;
//           })}
//         </ul>
//       </>
//     );
//   }
// }

// export default MoviesPage;
