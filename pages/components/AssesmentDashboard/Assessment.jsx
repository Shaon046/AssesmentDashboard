import React, { useState } from "react";
// import { styled } from "@mui/system";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { Box, Button } from "@mui/material";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { keyframes } from "styled-components";
import { FormControlLabel } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Switch from "@mui/material/Switch";
import InfoIcon from "@mui/icons-material/Info";
import { css } from "styled-components";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

const ContainerGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Header = styled(Box)`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
  color: #757575;
  border-bottom: 1px solid gray;
  height: 30px;
  text-align: center;

  padding: 0 @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    font-weight: 600;
    font-size: 16px;
  }
`;

const CustomList = styled(List)`
  width: 99%;
  height: 100%;
  // min-width: 360px;
  background-color: #e9e9e9;
  border-radius: 6px;
  margin: 4px;
  position: relative;
`;

const shakeAnimation = keyframes`
 0% { transform:  rotate(0deg); }
  25% { transform:  rotate(-0.30deg); }
  50% { transform:  rotate(0deg); }
  75% { transform:   rotate(-0.30deg); }
  100% { transform:  rotate(0deg); }
`;

const CustomListItems = styled(ListItem)`
  padding: 0;
  background-color: #ffffff;
  margin: 4px;
  border-radius: 6px;
  width: 97%;

  ${(props) =>
    props.editOn &&
    css`
      box-shadow: 1px 1px 4px gray;
    `}

  ${(props) =>
    props.editOn &&
    css`
      animation: ${shakeAnimation} 0.4s ease-in-out infinite;
    `}
`;

const EditContainer = styled(Box)`
  min-height: 40px;
  display: flex;

  align-items: center;
  position: relative;
`;

const EditHelperWidth = 95;

const EditHelper = styled(Box)`
  height: 100%;
  width: ${EditHelperWidth}%;
  background-color: #a9cae6;
  border: 1px solid #86bbea;
  border-radius: 4px;
  padding: 5px;
  font-size: 12px;

  opacity: ${({ editOn }) => (editOn ? 1 : 0)};
  transition: opacity 0.5s;
`;

const EditButtonContainer = styled(Box)`
  width: calc(100%-${EditHelperWidth}%);
`;

const InfoContainer = styled(Box)`
  margin: 0;
  padding: 0;
  position: sticky;
  float: right;
`;

const InfoHelpTest = styled(Box)`
  font-size: 10px;
  color: #9e9e9e;
  padding: 4px;
  position: absolute;
  right: 25px;
  top: 3px;
  background-color: #ffffff;
  border-radius: 4px 4px 0 4px;

  z-index: 999;
`;

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

const Helptext =
  'The Assessment Module interface allows users to select and arrange assessment module from . Once organized in the "Selected Assessment Modules" section, users can add them to a customized list called the "Custom Assessment List.';

const Assessment = () => {
  const Listone = [
    "Assessment 1",
    "Assessment 2",
    "Assessment 3",
    "Assessment 4",
  ];
  const Listtwo = ["Assessment 3"];

  const [showInfoHelpTest1, setShowInfoHelpTest1] = useState(false);
  const [showInfoHelpTest2, setShowInfoHelpTest2] = useState(false);
  const [showInfoHelpTest3, setShowInfoHelpTest3] = useState(false);

  const [editOn, setEditOn] = React.useState(false);
  const [allAssessmentModules, setAllAssessmentModules] = useState(Listone);
  const [selectedModules, setSelectedModules] = useState([]);
  const [customAssessmentList, setCustomAssessmentList] = useState(Listtwo);

  ///// Darg&drop Handler functions
  const dargStarted = (e, item) => {
    console.log("drag strated");
    e.dataTransfer.setData("item", item);
  };

  const dragOver = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const dragDroped = (e) => {
    console.log(e.dataTransfer.getData("item"));
    setSelectedModules((prev) => [...prev, e.dataTransfer.getData("item")]);
  };

  /////Handler functions

  const onEditHandler = (eve) => {
    // setEditOn((prev) => !prev);
    setEditOn(eve.target.checked);
  };

  const helpTextHandler = (eve, section) => {
    if (eve.type === "mouseenter") {
      if (section === "section1") {
        setShowInfoHelpTest1(true);
        setShowInfoHelpTest2(false);
        setShowInfoHelpTest3(false);
      } else if (section === "section2") {
        setShowInfoHelpTest1(false);
        setShowInfoHelpTest2(true);
        setShowInfoHelpTest3(false);
      } else if (section === "section3") {
        setShowInfoHelpTest1(false);
        setShowInfoHelpTest2(false);
        setShowInfoHelpTest3(true);
      }
    }

    if (eve.type === "mouseleave") {
      setShowInfoHelpTest1(false);
      setShowInfoHelpTest2(false);
      setShowInfoHelpTest3(false);
    }
  };

  const deleteSelectedAssessment = (item) => {
    const updatedArray = selectedModules.filter((value) => value !== item);
    setSelectedModules(updatedArray);
  };

  const deletecreatedAssessment = (item) => {
    const updatedArray = selectedModules.filter((value) => value !== item);
    setCustomAssessmentList(updatedArray);
  };

  return (
    <DragDropContext>
      <EditContainer>
        {
          <EditHelper editOn={editOn}>
            <p>{Helptext}</p>
          </EditHelper>
        }

        <EditButtonContainer>
          <FormControlLabel
            labelPlacement="right"
            control={
              <Switch
                onChange={(eve) => onEditHandler(eve)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Edit"
            sx={{ fontSize: "34px", color: "#757575" }}
          />
        </EditButtonContainer>
      </EditContainer>

      <ContainerGrid>
        {/* /////////////////////////GRID 1/////////////////////////*/}

        <Droppable droppableId="AllAssessment">
          {(provided) => (
            <div>
              <Header>All Assessment Modules</Header>

              <CustomList ref={provided.innerRef} {...provided.droppableProps}>
                {showInfoHelpTest1 && (
                  <InfoHelpTest>this is help text 1</InfoHelpTest>
                )}
                <InfoContainer
                  onMouseEnter={(eve) => helpTextHandler(eve, "section1")}
                  onMouseLeave={(eve) => helpTextHandler(eve)}
                >
                  <InfoIcon sx={{ color: "#B6B2B2" }} />
                </InfoContainer>
                {allAssessmentModules.map((value, index) => {
                  const labelId = `label-${value}`;

                  return (
                    <Draggable
                      key={labelId}
                      index={index}
                      draggableId={"kk" + index}
                    >
                      {(provided) => (
                        <CustomListItems>
                          <ListItemButton
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            role={undefined}
                            dense
                          >
                            <ListItemIcon>
                              <ViewStreamIcon />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value} />
                          </ListItemButton>
                        </CustomListItems>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </CustomList>
            </div>
          )}
        </Droppable>

        {/* /////////////////////////GRID 2/////////////////////////*/}

        <div>
          <Header>Selected Assessment Modules</Header>

          {/*  droppable*/}

          <Droppable droppableId="SelectedAssesment">
            {(provided) => (
              <CustomList {...provided.droppableProps} ref={provided.innerRef}>
                {showInfoHelpTest2 && (
                  <InfoHelpTest>this is help text for grid 2</InfoHelpTest>
                )}

                <InfoContainer
                  onMouseEnter={(eve) => helpTextHandler(eve, "section2")}
                  onMouseLeave={(eve) => helpTextHandler(eve)}
                >
                  <InfoIcon sx={{ color: "#B6B2B2" }} />
                </InfoContainer>

                {selectedModules.map((value, index) => {
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <React.Fragment key={value}>
                      <CustomListItems editOn={editOn}>
                        <ListItemButton role={undefined} dense>
                          <ListItemIcon>
                            <CheckBoxIcon />
                          </ListItemIcon>
                          <ListItemText id={labelId} primary={value} />
                        </ListItemButton>
                        {editOn && (
                          <RemoveCircleIcon
                            sx={{ color: "#d93e33", cursor: "pointer" }}
                            onClick={() => deleteSelectedAssessment(value)}
                          />
                        )}
                      </CustomListItems>
                      {index !== Listone.length - 1}
                    </React.Fragment>
                  );
                })}

                {/* {editOn && selectedModules.length !== 0 && (
                  <Fab
                    color="primary"
                    aria-label="add"
                    sx={{
                      height: "40px",
                      width: "40px",
                      marginRight: "8px",
                      float: "right",
                    }}
                  >
                    <AddIcon />
                  </Fab>
                )} */}
              </CustomList>
            )}
          </Droppable>
        </div>

        {/* /////////////////////////GRID 3/////////////////////////*/}
        <div>
          <Header>Created assessment</Header>
          <CustomList>
            {showInfoHelpTest3 && (
              <InfoHelpTest>this is help text for grid 3</InfoHelpTest>
            )}
            <InfoContainer
              onMouseEnter={(eve) => helpTextHandler(eve, "section3")}
              onMouseLeave={(eve) => helpTextHandler(eve)}
            >
              <InfoIcon sx={{ color: "#B6B2B2" }} />
            </InfoContainer>
            {customAssessmentList.map((value, index) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <React.Fragment key={value}>
                  <CustomListItems editOn={editOn}>
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <CreateNewFolderIcon />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={value} />
                    </ListItemButton>

                    {editOn && (
                      <RemoveCircleIcon
                        sx={{ color: "#d93e33", cursor: "pointer" }}
                        onClick={() => {
                          deletecreatedAssessment(value);
                        }}
                      />
                    )}
                  </CustomListItems>
                  {index !== Listone.length - 1}
                </React.Fragment>
              );
            })}
          </CustomList>
        </div>
      </ContainerGrid>
    </DragDropContext>
  );
};

export default Assessment;
