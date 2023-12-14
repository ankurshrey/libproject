

export interface Controls {
 control?:Control[]
}
export type controlType = "text" | "Dropdown"

export interface Control{
    id:string,
    label:string,
    type:controlType,
    placeholder?:string,
    source?: DataSource
}
export type dataSourceType = "static" | "object" | "json"

export interface DataSource{
   source:dataSourceType,
   data?:any,
   uri?:string
}
class Main {
    controls:Controls = {   
    }

    name() {
        //this.controls.control[0].
    }
    
}