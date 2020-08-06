// https://www.terraform.io/docs/providers/oci/r/data_oci_datascience_models.html
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
      "created_by": {
        "type": "string",
        "optional": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true
      },
      "models": {
        "type": [
          "list",
          [
            "object",
            {
              "artifact_content_disposition": "string",
              "artifact_content_length": "string",
              "artifact_content_md5": "string",
              "artifact_last_modified": "string",
              "compartment_id": "string",
              "created_by": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "display_name": "string",
              "empty_model": "bool",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "model_artifact": "string",
              "project_id": "string",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "project_id": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
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

export interface DataOciDatascienceModelsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly createdBy?: string;
  readonly displayName?: string;
  readonly projectId?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciDatascienceModelsFilter[];
}
export class DataOciDatascienceModelsModels extends ComplexComputedList {

  // artifact_content_disposition - computed: true, optional: false, required: true
  public get artifactContentDisposition() {
    return this.getStringAttribute('artifact_content_disposition');
  }

  // artifact_content_length - computed: true, optional: false, required: true
  public get artifactContentLength() {
    return this.getStringAttribute('artifact_content_length');
  }

  // artifact_content_md5 - computed: true, optional: false, required: true
  public get artifactContentMd5() {
    return this.getStringAttribute('artifact_content_md5');
  }

  // artifact_last_modified - computed: true, optional: false, required: true
  public get artifactLastModified() {
    return this.getStringAttribute('artifact_last_modified');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: true
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // empty_model - computed: true, optional: false, required: true
  public get emptyModel() {
    return this.getBooleanAttribute('empty_model');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_artifact - computed: true, optional: false, required: true
  public get modelArtifact() {
    return this.getStringAttribute('model_artifact');
  }

  // project_id - computed: true, optional: false, required: true
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciDatascienceModelsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatascienceModels extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatascienceModelsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_models',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._createdBy = config.createdBy;
    this._displayName = config.displayName;
    this._projectId = config.projectId;
    this._state = config.state;
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

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string;
  public get createdBy() {
    return this._createdBy;
  }
  public set createdBy(value: string | undefined) {
    this._createdBy = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // models - computed: true, optional: false, required: true
  public models(index: string) {
    return new DataOciDatascienceModelsModels(this, 'models', index);
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string;
  public get projectId() {
    return this._projectId;
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatascienceModelsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatascienceModelsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      created_by: this._createdBy,
      display_name: this._displayName,
      project_id: this._projectId,
      state: this._state,
      filter: this._filter,
    };
  }
}
