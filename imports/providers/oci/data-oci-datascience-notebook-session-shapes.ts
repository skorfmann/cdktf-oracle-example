// https://www.terraform.io/docs/providers/oci/r/data_oci_datascience_notebook_session_shapes.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "notebook_session_shapes": {
        "type": [
          "list",
          [
            "object",
            {
              "core_count": "number",
              "memory_in_gbs": "number",
              "name": "string"
            }
          ]
        ],
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciDatascienceNotebookSessionShapesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciDatascienceNotebookSessionShapesFilter[];
}
export class DataOciDatascienceNotebookSessionShapesNotebookSessionShapes extends ComplexComputedList {

  // core_count - computed: true, optional: false, required: true
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }

  // memory_in_gbs - computed: true, optional: false, required: true
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataOciDatascienceNotebookSessionShapesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatascienceNotebookSessionShapes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatascienceNotebookSessionShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_notebook_session_shapes',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // notebook_session_shapes - computed: true, optional: false, required: true
  public notebookSessionShapes(index: string) {
    return new DataOciDatascienceNotebookSessionShapesNotebookSessionShapes(this, 'notebook_session_shapes', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatascienceNotebookSessionShapesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatascienceNotebookSessionShapesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      filter: this._filter,
    };
  }
}
