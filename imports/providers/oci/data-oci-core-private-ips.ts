// https://www.terraform.io/docs/providers/oci/r/data_oci_core_private_ips.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_address": {
        "type": "string",
        "optional": true
      },
      "private_ips": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "hostname_label": "string",
              "id": "string",
              "ip_address": "string",
              "is_primary": "bool",
              "subnet_id": "string",
              "time_created": "string",
              "vlan_id": "string",
              "vnic_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "optional": true
      },
      "vlan_id": {
        "type": "string",
        "optional": true
      },
      "vnic_id": {
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

export interface DataOciCorePrivateIpsConfig extends TerraformMetaArguments {
  readonly ipAddress?: string;
  readonly subnetId?: string;
  readonly vlanId?: string;
  readonly vnicId?: string;
  /** filter block */
  readonly filter?: DataOciCorePrivateIpsFilter[];
}
export class DataOciCorePrivateIpsPrivateIps extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // hostname_label - computed: true, optional: false, required: true
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_primary - computed: true, optional: false, required: true
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vlan_id - computed: true, optional: false, required: true
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vnic_id - computed: true, optional: false, required: true
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }
}
export interface DataOciCorePrivateIpsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCorePrivateIps extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCorePrivateIpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_core_private_ips',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ipAddress = config.ipAddress;
    this._subnetId = config.subnetId;
    this._vlanId = config.vlanId;
    this._vnicId = config.vnicId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this._ipAddress;
  }
  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
  }

  // private_ips - computed: true, optional: false, required: true
  public privateIps(index: string) {
    return new DataOciCorePrivateIpsPrivateIps(this, 'private_ips', index);
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string;
  public get vlanId() {
    return this._vlanId;
  }
  public set vlanId(value: string | undefined) {
    this._vlanId = value;
  }

  // vnic_id - computed: false, optional: true, required: false
  private _vnicId?: string;
  public get vnicId() {
    return this._vnicId;
  }
  public set vnicId(value: string | undefined) {
    this._vnicId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCorePrivateIpsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCorePrivateIpsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ip_address: this._ipAddress,
      subnet_id: this._subnetId,
      vlan_id: this._vlanId,
      vnic_id: this._vnicId,
      filter: this._filter,
    };
  }
}
