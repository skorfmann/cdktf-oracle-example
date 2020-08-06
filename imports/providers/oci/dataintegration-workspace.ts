// https://www.terraform.io/docs/providers/oci/r/dataintegration_workspace.html
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
        "required": true
      },
      "dns_server_ip": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "dns_server_zone": {
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
      "is_force_operation": {
        "type": "bool",
        "optional": true
      },
      "is_private_network_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "quiesce_timeout": {
        "type": "number",
        "optional": true
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
        "optional": true,
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
        "optional": true,
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

export interface DataintegrationWorkspaceConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly displayName: string;
  readonly dnsServerIp?: string;
  readonly dnsServerZone?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly isForceOperation?: boolean;
  readonly isPrivateNetworkEnabled?: boolean;
  readonly quiesceTimeout?: number;
  readonly subnetId?: string;
  readonly vcnId?: string;
  /** timeouts block */
  readonly timeouts?: DataintegrationWorkspaceTimeouts;
}
export interface DataintegrationWorkspaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DataintegrationWorkspace extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataintegrationWorkspaceConfig) {
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._dnsServerIp = config.dnsServerIp;
    this._dnsServerZone = config.dnsServerZone;
    this._freeformTags = config.freeformTags;
    this._isForceOperation = config.isForceOperation;
    this._isPrivateNetworkEnabled = config.isPrivateNetworkEnabled;
    this._quiesceTimeout = config.quiesceTimeout;
    this._subnetId = config.subnetId;
    this._vcnId = config.vcnId;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // dns_server_ip - computed: true, optional: true, required: false
  private _dnsServerIp?: string;
  public get dnsServerIp() {
    return this._dnsServerIp ?? this.getStringAttribute('dns_server_ip');
  }
  public set dnsServerIp(value: string | undefined) {
    this._dnsServerIp = value;
  }

  // dns_server_zone - computed: true, optional: true, required: false
  private _dnsServerZone?: string;
  public get dnsServerZone() {
    return this._dnsServerZone ?? this.getStringAttribute('dns_server_zone');
  }
  public set dnsServerZone(value: string | undefined) {
    this._dnsServerZone = value;
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

  // is_force_operation - computed: false, optional: true, required: false
  private _isForceOperation?: boolean;
  public get isForceOperation() {
    return this._isForceOperation;
  }
  public set isForceOperation(value: boolean | undefined) {
    this._isForceOperation = value;
  }

  // is_private_network_enabled - computed: true, optional: true, required: false
  private _isPrivateNetworkEnabled?: boolean;
  public get isPrivateNetworkEnabled() {
    return this._isPrivateNetworkEnabled ?? this.getBooleanAttribute('is_private_network_enabled');
  }
  public set isPrivateNetworkEnabled(value: boolean | undefined) {
    this._isPrivateNetworkEnabled = value;
  }

  // quiesce_timeout - computed: false, optional: true, required: false
  private _quiesceTimeout?: number;
  public get quiesceTimeout() {
    return this._quiesceTimeout;
  }
  public set quiesceTimeout(value: number | undefined) {
    this._quiesceTimeout = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: true
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId ?? this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vcn_id - computed: true, optional: true, required: false
  private _vcnId?: string;
  public get vcnId() {
    return this._vcnId ?? this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string | undefined) {
    this._vcnId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataintegrationWorkspaceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataintegrationWorkspaceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      description: this._description,
      display_name: this._displayName,
      dns_server_ip: this._dnsServerIp,
      dns_server_zone: this._dnsServerZone,
      freeform_tags: this._freeformTags,
      is_force_operation: this._isForceOperation,
      is_private_network_enabled: this._isPrivateNetworkEnabled,
      quiesce_timeout: this._quiesceTimeout,
      subnet_id: this._subnetId,
      vcn_id: this._vcnId,
      timeouts: this._timeouts,
    };
  }
}
