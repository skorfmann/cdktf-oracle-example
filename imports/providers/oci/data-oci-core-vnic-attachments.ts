// https://www.terraform.io/docs/providers/oci/r/data_oci_core_vnic_attachments.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_id": {
        "type": "string",
        "optional": true
      },
      "vnic_attachments": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "compartment_id": "string",
              "create_vnic_details": [
                "list",
                [
                  "object",
                  {
                    "assign_public_ip": "string",
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
                    "nsg_ids": [
                      "list",
                      "string"
                    ],
                    "private_ip": "string",
                    "skip_source_dest_check": "bool",
                    "subnet_id": "string",
                    "vlan_id": "string"
                  }
                ]
              ],
              "display_name": "string",
              "id": "string",
              "instance_id": "string",
              "nic_index": "number",
              "state": "string",
              "subnet_id": "string",
              "time_created": "string",
              "vlan_id": "string",
              "vlan_tag": "number",
              "vnic_id": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciCoreVnicAttachmentsConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  readonly instanceId?: string;
  readonly vnicId?: string;
  /** filter block */
  readonly filter?: DataOciCoreVnicAttachmentsFilter[];
}
export class DataOciCoreVnicAttachmentsVnicAttachmentsCreateVnicDetails extends ComplexComputedList {

  // assign_public_ip - computed: true, optional: false, required: true
  public get assignPublicIp() {
    return this.getStringAttribute('assign_public_ip');
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

  // nsg_ids - computed: true, optional: false, required: true
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_ip - computed: true, optional: false, required: true
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // skip_source_dest_check - computed: true, optional: false, required: true
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vlan_id - computed: true, optional: false, required: true
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
}
export class DataOciCoreVnicAttachmentsVnicAttachments extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // create_vnic_details - computed: true, optional: false, required: true
  public get createVnicDetails() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: true
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // nic_index - computed: true, optional: false, required: true
  public get nicIndex() {
    return this.getNumberAttribute('nic_index');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
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

  // vlan_tag - computed: true, optional: false, required: true
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }

  // vnic_id - computed: true, optional: false, required: true
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }
}
export interface DataOciCoreVnicAttachmentsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreVnicAttachments extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVnicAttachmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_vnic_attachments',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._instanceId = config.instanceId;
    this._vnicId = config.vnicId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string | undefined) {
    this._availabilityDomain = value;
  }

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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string;
  public get instanceId() {
    return this._instanceId;
  }
  public set instanceId(value: string | undefined) {
    this._instanceId = value;
  }

  // vnic_attachments - computed: true, optional: false, required: true
  public vnicAttachments(index: string) {
    return new DataOciCoreVnicAttachmentsVnicAttachments(this, 'vnic_attachments', index);
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
  private _filter?: DataOciCoreVnicAttachmentsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreVnicAttachmentsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      instance_id: this._instanceId,
      vnic_id: this._vnicId,
      filter: this._filter,
    };
  }
}
