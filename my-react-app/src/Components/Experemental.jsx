// import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import styled from "styled-components";

// const WrapForm = styled.div`
// 	background-color: ${(props) => props.theme.colors.primarySecondary};
// 	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
// 	width: 800px;
// 	height: auto;
// 	margin: 0 auto;
// 	padding: 30px;
// 	border-radius: 2%;
// 	position: relative;
// `;

// const FormLogin = styled(Form)`
// 	display: flex;
// 	flex-direction: column;
// 	padding: 20px 0;
// 	height: 100%;
// `;

const InputWrap = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: stretch;
	gap: ${(props) => props.$gap || null};
`;

const TextField = styled(Field)`
	border-radius: 5px;
	width: 100%;
	flex-grow: 1;
	border: 2px solid
		${(props) =>
			props.$isinvalid === "true"
				? props.theme.colors.warning
				: props.theme.colors.primary};
`;

const LabelTextField = styled.label`
	font-size: 1.6rem;
	padding: 10px 5px;
`;

const ErrorMessageBox = styled(ErrorMessage)`
	color: ${(props) => props.theme.colors.warning};
	font-size: 1rem;
	padding: 0 10px;
`;

const ButtonSubmit = styled.button`
	padding: 15px 25px;
	background-color: ${(props) => props.theme.colors.primary};
	font-size: 1.8rem;
	color: ${(props) => props.theme.colors.primarySecondary};
	border-radius: 5px;
	margin-top: auto;

	&:disabled {
		opacity: 0.4;
	}

	&:hover {
		transform: scale(1.01);
	}
`;

// const ButtonAddItem = styled(ButtonSubmit)`
// 	padding: 15px 25px;
// 	background-color: ${(props) => props.theme.colors.primary};
// 	font-size: 1.8rem;
// 	color: ${(props) => props.theme.colors.primarySecondary};
// 	border-radius: 5px;
// 	align-self: flex-end;
// 	width: fit-content;
// 	margin-top: 30px;
// `;

// const AddItemBox = styled.div`
// 	//display: ${(props) => (props.$isShowConfirm === "true" ? "block" : "none")};
// 	display: block;
// 	width: 600px;
// 	height: auto;
// 	padding: 30px;
// 	background-color: ${(props) => props.theme.colors.background};
// 	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
// 	border-radius: 5px;
// 	z-index: 4;
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// `;

// const AddItemBoxWrap = styled.div`
// 	position: relative;
// `

// const TitleAddItem = styled.h4`
// 	font-size: 2.2rem;
// `;

// const ButtonSaveItem = styled(ButtonSubmit)`
// 	margin-top: 30px;
// `;

// const ButtonClose = styled(ButtonSubmit)`
// 	background-color: ${(props) => props.theme.colors.background};
// 	position: absolute;
// 	padding: 0;
// 	top: 0;
// 	right: 0;
// `


 // Here is an example of a form with an editable list.
 // Next to each input are buttons for insert and remove.
 // If the list is empty, there is a button to add an item.
const DynamicForm = () => (
   <div>
     <h1>Friend List</h1>
     <Formik
       initialValues={{ titleCheckList: "", description: "", friends: ['jared', 'ian', 'brent'] }}
       onSubmit={values =>
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
         }, 500)
       }
       render={({ values,errors,
				touched,
				// isSubmitting,
				handleChange,
				handleBlur }) => (
         <Form>
					<InputWrap>
								<LabelTextField htmlFor="titleCheckList">
									Название чек-листа
								</LabelTextField>
								<TextField
									type="text"
									name="titleCheckList"
									id="titleCheckList"
									value={values.titleCheckList}
									onChange={handleChange}
									onBlur={handleBlur}
									$isinvalid={
										!!errors.titleCheckList && !!touched.titleCheckList
									}
								/>
								<ErrorMessageBox name="titleCheckList" component="div" />
							</InputWrap>
							<InputWrap>
								<LabelTextField htmlFor="description">Описание</LabelTextField>
								<TextField
									as="textarea"
									rows={3}
									cols={30}
									name="description"
									id="description"
									value={values.description}
									onChange={handleChange}
									onBlur={handleBlur}
									$isinvalid={!!errors.description && !!touched.description}
								/>
								<ErrorMessageBox name="description" component="div" />
							</InputWrap>
           <FieldArray
             name="friends"
             render={arrayHelpers => (
               <div>
                 {values.friends && values.friends.length > 0 ? (
                   values.friends.map((friend, index) => (
                     <div key={index}>
                       <Field name={`friends.${index}`} />
                       <button
                         type="button"
                         onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                       >
                         -
                       </button>
                       <button
                         type="button"
                         onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                       >
                         +
                       </button>
                     </div>
                   ))
                 ) : (
                   <button type="button" onClick={() => arrayHelpers.push('')}>
                     {/* show this when user has removed all friends from the list */}
                     Add a friend
                   </button>
                 )}
                 <div>
                   <button type="submit">Submit</button>
                 </div>
               </div>
             )}
           />
         </Form>
       )}
     />
   </div>
 );

 export default DynamicForm;
