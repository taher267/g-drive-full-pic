"use client";
import React from "react";
import { Button, TextField } from "@/components";
import axios from "@/api/axios";

interface DataProps {
  [key: string]: any;
}

interface DriveProps {
  kind: string;
  id: string;
  name: string;
  mimeType: string;
}

const NewProductForm = () => {
  const [drive, setDrive] = React.useState<DriveProps | null>(null);
  const [fileUpLoading, setFileUpLoading] = React.useState<boolean>(false);
  const [addProductLoading, setaddProductLoading] =
    React.useState<boolean>(false);
  const [fileDeleting, setFileDeleting] = React.useState<boolean>(false);
  const fileRef = React.useRef<any>();
  const formRef = React.useRef<any>();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      if (!drive?.id) {
        return alert(`Please upload image`);
      }
      let newData: DataProps = {};
      const formData = new FormData(event.currentTarget);
      formData.forEach((value, key) => {
        if (value) {
          newData[key] = value;
        }
      });
      newData.drive_id = drive.id;
      setaddProductLoading(true);
      const { data } = await axios.post("/products", newData);

      formRef.current.reset();
      setDrive(null);
    } catch (e) {
      console.log(e);
    } finally {
      setaddProductLoading(false);
    }
  };
  const fileHandler = async (e: any) => {
    try {
      const { files } = e.target;
      if (files?.length) {
        setFileUpLoading(true);
        const { data } = await axios.post(
          "/files",
          { image: files[0] },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setDrive(data.uploaded);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setFileUpLoading(false);
      fileRef.current.value='';
    }
  };
  const fileDeleteFromDrive = async () => {
    try {
      if (drive?.id) {
        setFileDeleting(true);
        const { data } = await axios.delete(`files/${drive.id}`, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(data);
        setDrive(null);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setFileDeleting(false);
    }
  };
  return (
    <div>
      <input
        ref={fileRef}
        type="file"
        name="image"
        onChange={fileHandler}
        style={{ position: "absolute", top: "-500000px" }}
        accept="image/png,image/jpeg"
      />
      <form
        className="admin__new-priduct-form"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <h2>New Product</h2>
        <div>
          <div
            style={{
              height: "150px",
              width: "150px",
              border: "1px solid #ddd",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {fileUpLoading ? (
              <>Loading...</>
            ) : (
              <>
                {drive?.id ? (
                  <div style={{ position: "relative" }}>
                    <p
                      style={{
                        position: "absolute",
                        right: "5px",
                        top: "5px",
                      }}
                    >
                      {fileDeleting ? (
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          Del...
                        </span>
                      ) : (
                        <span
                          onClick={fileDeleteFromDrive}
                          style={{
                            color: "red",
                          }}
                        >
                          X
                        </span>
                      )}
                    </p>
                    <img
                      src={`https://drive.google.com/uc?export=view&id=${drive?.id}`}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                ) : (
                  <>
                    <span>Upload Image</span>
                    <span
                      onClick={() => {
                        fileRef.current.click();
                      }}
                    >
                      ^^
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        <TextField
          {...{ name: "name", placeholder: "Enter product name..." }}
        />
        <TextField
          {...{
            name: "description",
            placeholder: "Enter product description...",
          }}
        />
        <TextField
          {...{
            name: "price",
            type: "number",
            placeholder: "Enter product price...",
          }}
          min={0}
        />
        <TextField
          {...{ name: "prod_code", placeholder: "Enter product code..." }}
          required
          
        />
        {/* <TextField
          required
          {...{
            name: "drive_id",
            placeholder: "Enter image uploaded drive id...",
          }}
        /> */}
        <Button content="Submit" type="submit" disabled={addProductLoading} />
      </form>
    </div>
  );
};

export default NewProductForm;
