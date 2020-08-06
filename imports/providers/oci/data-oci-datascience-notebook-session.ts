// https://www.terraform.io/docs/providers/oci/r/data_oci_datascience_notebook_session.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
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
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "notebook_session_configuration_details": {
        "type": [
          "list",
          [
            "object",
            {
              "block_storage_size_in_gbs": "number",
              "shape": "string",
              "subnet_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "notebook_session_id": {
        "type": "string",
        "required": true
      },
      "notebook_session_url": {
        "type": "string",
        "computed": true
      },
      "project_id": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciDatascienceNotebookSessionConfig extends TerraformMetaArguments {
  readonly notebookSessionId: string;
}
export class DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails extends ComplexComputedList {

  // block_storage_size_in_gbs - computed: true, optional: false, required: true
  public get blockStorageSizeInGbs() {
    return this.getNumberAttribute('block_storage_size_in_gbs');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

// Resource

export class DataOciDatascienceNotebookSession extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatascienceNotebookSessionConfig) {
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
    this._notebookSessionId = config.notebookSessionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: true
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // notebook_session_configuration_details - computed: true, optional: false, required: true
  public notebookSessionConfigurationDetails(index: string) {
    return new DataOciDatascienceNotebookSessionNotebookSessionConfigurationDetails(this, 'notebook_session_configuration_details', index);
  }

  // notebook_session_id - computed: false, optional: false, required: true
  private _notebookSessionId: string;
  public get notebookSessionId() {
    return this._notebookSessionId;
  }
  public set notebookSessionId(value: string) {
    this._notebookSessionId = value;
  }

  // notebook_session_url - computed: true, optional: false, required: true
  public get notebookSessionUrl() {
    return this.getStringAttribute('notebook_session_url');
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      notebook_session_id: this._notebookSessionId,
    };
  }
}
