import React, { createContext, useContext, useEffect, useState } from 'react'
import { AppContext } from '../index'

const PrimaryPage = () => {
  const configPath = useContext(AppContext);
  const [fileContent, setFileContent] = useState(null);

  console.log("nkdvnlkdnv",configPath)
  useEffect(() => {


    const fetchData = async () => {

  try {
    // Fetch the file using the path
    const response = await fetch(configPath);
     console.log("response",response)
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

        // Parse the JSON content
        const data = await response.json();

        // Set the file content in the state
        setFileContent(data);
        console.log("second", data)
      } catch (error) {
        console.error(error);
      }

    }
    fetchData()
  }, [])
  return(
    <h1>primary page</h1>
  )
}

export default PrimaryPage