// https://www.terraform.io/docs/providers/oci/r/datascience_model.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "artifact_content_disposition": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "artifact_content_length": {
        "type": "string",
        "required": true
      },
      "artifact_content_md5": {
        "type": "string",
        "computed": true
      },
      "artifact_last_modified": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "created_by": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "empty_model": {
        "type": "bool",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "model_artifact": {
        "type": "string",
        "required": true
      },
      "project_id": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DatascienceModelConfig extends TerraformMetaArguments {
  readonly artifactContentDisposition?: string;
  readonly artifactContentLength: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly modelArtifact: string;
  readonly projectId: string;
  readonly state?: string;
  /** timeouts block */
  readonly timeouts?: DatascienceModelTimeouts;
}
export interface DatascienceModelTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatascienceModel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatascienceModelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_model',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._artifactContentDisposition = config.artifactContentDisposition;
    this._artifactContentLength = config.artifactContentLength;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._modelArtifact = config.modelArtifact;
    this._projectId = config.projectId;
    this._state = config.state;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_content_disposition - computed: true, optional: true, required: false
  private _artifactContentDisposition?: string;
  public get artifactContentDisposition() {
    return this._artifactContentDisposition ?? this.getStringAttribute('artifact_content_disposition');
  }
  public set artifactContentDisposition(value: string | undefined) {
    this._artifactContentDisposition = value;
  }

  // artifact_content_length - computed: false, optional: false, required: true
  private _artifactContentLength: string;
  public get artifactContentLength() {
    return this._artifactContentLength;
  }
  public set artifactContentLength(value: string) {
    this._artifactContentLength = value;
  }

  // artifact_content_md5 - computed: true, optional: false, required: true
  public get artifactContentMd5() {
    return this.getStringAttribute('artifact_content_md5');
  }

  // artifact_last_modified - computed: true, optional: false, required: true
  public get artifactLastModified() {
    return this.getStringAttribute('artifact_last_modified');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // created_by - computed: true, optional: false, required: true
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // empty_model - computed: true, optional: false, required: true
  public get emptyModel() {
    return this.getBooleanAttribute('empty_model');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // model_artifact - computed: false, optional: false, required: true
  private _modelArtifact: string;
  public get modelArtifact() {
    return this._modelArtifact;
  }
  public set modelArtifact(value: string) {
    this._modelArtifact = value;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId: string;
  public get projectId() {
    return this._projectId;
  }
  public set projectId(value: string) {
    this._projectId = value;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state ?? this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatascienceModelTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatascienceModelTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_content_disposition: this._artifactContentDisposition,
      artifact_content_length: this._artifactContentLength,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      description: this._description,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      model_artifact: this._modelArtifact,
      project_id: this._projectId,
      state: this._state,
      timeouts: this._timeouts,
    };
  }
}
