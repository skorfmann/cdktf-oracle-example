// https://www.terraform.io/docs/providers/oci/r/data_oci_integration_integration_instance.html
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
      "idcs_at": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "instance_url": {
        "type": "string",
        "computed": true
      },
      "integration_instance_id": {
        "type": "string",
        "required": true
      },
      "integration_instance_type": {
        "type": "string",
        "computed": true
      },
      "is_byol": {
        "type": "bool",
        "computed": true
      },
      "is_file_server_enabled": {
        "type": "bool",
        "computed": true
      },
      "message_packs": {
        "type": "number",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "state_message": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
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

// Configuration

export interface DataOciIntegrationIntegrationInstanceConfig extends TerraformMetaArguments {
  readonly integrationInstanceId: string;
}

// Resource

export class DataOciIntegrationIntegrationInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIntegrationIntegrationInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_integration_integration_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._integrationInstanceId = config.integrationInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // idcs_at - computed: true, optional: false, required: true
  public get idcsAt() {
    return this.getStringAttribute('idcs_at');
  }

  // instance_url - computed: true, optional: false, required: true
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // integration_instance_id - computed: false, optional: false, required: true
  private _integrationInstanceId: string;
  public get integrationInstanceId() {
    return this._integrationInstanceId;
  }
  public set integrationInstanceId(value: string) {
    this._integrationInstanceId = value;
  }

  // integration_instance_type - computed: true, optional: false, required: true
  public get integrationInstanceType() {
    return this.getStringAttribute('integration_instance_type');
  }

  // is_byol - computed: true, optional: false, required: true
  public get isByol() {
    return this.getBooleanAttribute('is_byol');
  }

  // is_file_server_enabled - computed: true, optional: false, required: true
  public get isFileServerEnabled() {
    return this.getBooleanAttribute('is_file_server_enabled');
  }

  // message_packs - computed: true, optional: false, required: true
  public get messagePacks() {
    return this.getNumberAttribute('message_packs');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: true
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      integration_instance_id: this._integrationInstanceId,
    };
  }
}
