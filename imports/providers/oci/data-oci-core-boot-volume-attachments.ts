// https://www.terraform.io/docs/providers/oci/r/data_oci_core_boot_volume_attachments.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "required": true
      },
      "boot_volume_attachments": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "boot_volume_id": "string",
              "compartment_id": "string",
              "display_name": "string",
              "id": "string",
              "instance_id": "string",
              "is_pv_encryption_in_transit_enabled": "bool",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "boot_volume_id": {
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

export interface DataOciCoreBootVolumeAttachmentsConfig extends TerraformMetaArguments {
  readonly availabilityDomain: string;
  readonly bootVolumeId?: string;
  readonly compartmentId: string;
  readonly instanceId?: string;
  /** filter block */
  readonly filter?: DataOciCoreBootVolumeAttachmentsFilter[];
}
export class DataOciCoreBootVolumeAttachmentsBootVolumeAttachments extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // boot_volume_id - computed: true, optional: false, required: true
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: true
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
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
export interface DataOciCoreBootVolumeAttachmentsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreBootVolumeAttachments extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreBootVolumeAttachmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_boot_volume_attachments',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._bootVolumeId = config.bootVolumeId;
    this._compartmentId = config.compartmentId;
    this._instanceId = config.instanceId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }

  // boot_volume_attachments - computed: true, optional: false, required: true
  public bootVolumeAttachments(index: string) {
    return new DataOciCoreBootVolumeAttachmentsBootVolumeAttachments(this, 'boot_volume_attachments', index);
  }

  // boot_volume_id - computed: false, optional: true, required: false
  private _bootVolumeId?: string;
  public get bootVolumeId() {
    return this._bootVolumeId;
  }
  public set bootVolumeId(value: string | undefined) {
    this._bootVolumeId = value;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreBootVolumeAttachmentsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreBootVolumeAttachmentsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      boot_volume_id: this._bootVolumeId,
      compartment_id: this._compartmentId,
      instance_id: this._instanceId,
      filter: this._filter,
    };
  }
}
