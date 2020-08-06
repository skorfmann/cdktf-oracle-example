// https://www.terraform.io/docs/providers/oci/r/data_oci_dataintegration_workspace.html
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
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "dns_server_ip": {
        "type": "string",
        "computed": true
      },
      "dns_server_zone": {
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
      "is_force_operation": {
        "type": "bool",
        "computed": true
      },
      "is_private_network_enabled": {
        "type": "bool",
        "computed": true
      },
      "quiesce_timeout": {
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
      "subnet_id": {
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
      },
      "vcn_id": {
        "type": "string",
        "computed": true
      },
      "workspace_id": {
        "type": "string",
        "required": true
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

export interface DataOciDataintegrationWorkspaceConfig extends TerraformMetaArguments {
  readonly workspaceId: string;
}

// Resource

export class DataOciDataintegrationWorkspace extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDataintegrationWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataintegration_workspace',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._workspaceId = config.workspaceId;
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

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns_server_ip - computed: true, optional: false, required: true
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
  }

  // dns_server_zone - computed: true, optional: false, required: true
  public get dnsServerZone() {
    return this.getStringAttribute('dns_server_zone');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_force_operation - computed: true, optional: false, required: true
  public get isForceOperation() {
    return this.getBooleanAttribute('is_force_operation');
  }

  // is_private_network_enabled - computed: true, optional: false, required: true
  public get isPrivateNetworkEnabled() {
    return this.getBooleanAttribute('is_private_network_enabled');
  }

  // quiesce_timeout - computed: true, optional: false, required: true
  public get quiesceTimeout() {
    return this.getNumberAttribute('quiesce_timeout');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: true
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId: string;
  public get workspaceId() {
    return this._workspaceId;
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      workspace_id: this._workspaceId,
    };
  }
}
