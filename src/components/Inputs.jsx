// import React from "react";
// import styled from "styled-components";

// export function TextInputs({ span, children, placeholder, type }) {
//   return (
//     <Label>
//       <Span>{span}</Span>
//       {children}
//     </Label>
//   );
// }

// export function DateInputs() {
//   return (
//     <LocationDiv>
//       <LocationLabel>
//         <Span>시작 날짜 : </Span>
//         <LocationInput type="date" />
//       </LocationLabel>
//       <LocationLabel>
//         <Span>끝나는 날짜 : </Span>
//         <LocationInput type="date" />
//       </LocationLabel>
//     </LocationDiv>
//   );
// }

// export function LocationInputs({ list, selected }) {
//   return (
//     <LocationDiv>
//       <LocationLabel>
//         <Span>구 : </Span>
//         <RegionSelect>
//           <option selected>{selected}</option>
//           {list.map((item, idx) => {
//             return (
//               <option value={item} id={item[idx]}>
//                 {item}
//               </option>
//             );
//           })}
//         </RegionSelect>
//       </LocationLabel>
//       <LocationLabel>
//         <Span>장소 : </Span>
//         <LocationInput type="text" placeholder="장소를 입력하세요" />
//       </LocationLabel>
//     </LocationDiv>
//   );
// }

// export function SelectBox({ list, selected }) {
//   return (
//     <RegionSelect>
//       <option selected>{selected}</option>
//       {list.map((item, idx) => {
//         return (
//           <option value={item} id={item[idx]}>
//             {item}
//           </option>
//         );
//       })}
//     </RegionSelect>
//   );
// }

// const RegionSelect = styled.select`
//   width: 70%;
// `;

// const LocationDiv = styled.div`
//   /* background-color: azure; */
//   width: 100%;

//   display: flex;
//   justify-content: flex-end;
// `;
// const LocationLabel = styled.label`
//   /* background-color: aqua; */
//   width: 41%;
//   display: flex;
//   justify-content: flex-end;
// `;
// const LocationInput = styled.input`
//   width: 70%;
// `;

// const Label = styled.label`
//   /* background-color: aqua; */
//   width: 100%;
//   display: flex;
//   justify-content: flex-end;
//   gap: 50px;
// `;

// const Span = styled.span`
//   width: 130px;
//   margin-left: 10px;
//   font-size: 20px;
// `;
