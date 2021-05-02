import { Button, InputGroup, Label } from "@blueprintjs/core";
import React from "react";
import DefalutDialog from "../default-dialog/DefaultDialog";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const PredictionFormDialog = (props: IProps) => {
  return (
    <DefalutDialog
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Dress Sales Prediction"
    >
      <div style={{padding:"40px"}}>
      
        <div className="i-group">
          <Label style={{marginBottom:"5px"}}>Size</Label>
          <InputGroup
            id="text-input"
            value={""}
            min={100}
            fill
            large
            onChange={(e)=>{

            }}
          />
        </div>
        <div className="i-group">
          <Label style={{marginBottom:"5px"}}>Sleere type</Label>
          <InputGroup
            id="text-input"
            value={""}
            min={100}
            fill
            large
            onChange={(e)=>{

            }}
          />
        </div>
        <div className="i-group">
          <Label style={{marginBottom:"5px"}}>Sleere lenght</Label>
          <InputGroup
            id="text-input"
            value={""}
            min={100}
            fill
            large
            onChange={(e)=>{

            }}
          />
        </div>
        <div className="i-group">
          <Label style={{marginBottom:"5px"}}>Dress length</Label>
          <InputGroup
            id="text-input"
            value={""}
            min={100}
            fill
            large
            onChange={(e)=>{

            }}
          />
        </div>
        <div className="i-group">
          <Label style={{marginBottom:"5px"}}>Pattern</Label>
          <InputGroup
            id="text-input"
            value={""}
            min={100}
            fill
            large
            onChange={(e)=>{

            }}
          />
        </div>
        <div className="i-group">
          <Label style={{marginBottom:"5px"}}>Fabric type</Label>
          <InputGroup
            id="text-input"
            value={""}
            min={100}
            fill
            large
            onChange={(e)=>{

            }}
          />
        </div>
        <div className="i-group">
          <Label style={{marginBottom:"5px"}}>District</Label>
          <InputGroup
            id="text-input"
            value={""}
            min={100}
            fill
            large
            onChange={(e)=>{

            }}
          />
        </div>
        <div className="i-group">
          <Label style={{marginBottom:"5px"}}>Age</Label>
          <InputGroup
            id="text-input"
            value={""}
            min={100}
            fill
            large
            onChange={(e)=>{

            }}
          />
        </div>
        <div style={{textAlign:"right"}}>
          <Button style={{marginRight:"10px"}}>Get Prediction</Button>
          <Button>Reset</Button>
      </div>
      </div>
      
    </DefalutDialog>
  );
};

export default PredictionFormDialog;
