// https://www.terraform.io/docs/providers/oci/r/datascience_notebook_session.html
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
      "display_name": {
        "type": "string",
        "optional": true,
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
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "notebook_session_url": {
        "type": "string",
        "computed": true
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
      "notebook_session_configuration_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "block_storage_size_in_gbs": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "shape": {
              "type": "string",
              "required": true
            },
            "subnet_id": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
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

export interface DatascienceNotebookSessionConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly projectId: string;
  readonly state?: string;
  /** notebook_session_configuration_details block */
  readonly notebookSessionConfigurationDetails: DatascienceNotebookSessionNotebookSessionConfigurationDetails[];
  /** timeouts block */
  readonly timeouts?: DatascienceNotebookSessionTimeouts;
}
export interface DatascienceNotebookSessionNotebookSessionConfigurationDetails {
  readonly blockStorageSizeInGbs?: number;
  readonly shape: string;
  readonly subnetId: string;
}
export interface DatascienceNotebookSessionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatascienceNotebookSession extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatascienceNotebookSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datascience_notebook_session',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._projectId = config.projectId;
    this._state = config.state;
    this._notebookSessionConfigurationDetails = config.notebookSessionConfigurationDetails;
    this._timeouts = config.timeouts;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
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

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // notebook_session_url - computed: true, optional: false, required: true
  public get notebookSessionUrl() {
    return this.getStringAttribute('notebook_session_url');
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

  // notebook_session_configuration_details - computed: false, optional: false, required: true
  private _notebookSessionConfigurationDetails: DatascienceNotebookSessionNotebookSessionConfigurationDetails[];
  public get notebookSessionConfigurationDetails() {
    return this._notebookSessionConfigurationDetails;
  }
  public set notebookSessionConfigurationDetails(value: DatascienceNotebookSessionNotebookSessionConfigurationDetails[]) {
    this._notebookSessionConfigurationDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatascienceNotebookSessionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatascienceNotebookSessionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      project_id: this._projectId,
      state: this._state,
      notebook_session_configuration_details: this._notebookSessionConfigurationDetails,
      timeouts: this._timeouts,
    };
  }
}
