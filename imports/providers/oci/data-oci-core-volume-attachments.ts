// https://www.terraform.io/docs/providers/oci/r/data_oci_core_volume_attachments.html
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
      "volume_attachments": {
        "type": [
          "list",
          [
            "object",
            {
              "attachment_type": "string",
              "availability_domain": "string",
              "chap_secret": "string",
              "chap_username": "string",
              "compartment_id": "string",
              "device": "string",
              "display_name": "string",
              "id": "string",
              "instance_id": "string",
              "ipv4": "string",
              "iqn": "string",
              "is_pv_encryption_in_transit_enabled": "bool",
              "is_read_only": "bool",
              "is_shareable": "bool",
              "port": "number",
              "state": "string",
              "time_created": "string",
              "use_chap": "bool",
              "volume_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "volume_id": {
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

export interface DataOciCoreVolumeAttachmentsConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  readonly instanceId?: string;
  readonly volumeId?: string;
  /** filter block */
  readonly filter?: DataOciCoreVolumeAttachmentsFilter[];
}
export class DataOciCoreVolumeAttachmentsVolumeAttachments extends ComplexComputedList {

  // attachment_type - computed: true, optional: false, required: true
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // chap_secret - computed: true, optional: false, required: true
  public get chapSecret() {
    return this.getStringAttribute('chap_secret');
  }

  // chap_username - computed: true, optional: false, required: true
  public get chapUsername() {
    return this.getStringAttribute('chap_username');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // device - computed: true, optional: false, required: true
  public get device() {
    return this.getStringAttribute('device');
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

  // ipv4 - computed: true, optional: false, required: true
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // iqn - computed: true, optional: false, required: true
  public get iqn() {
    return this.getStringAttribute('iqn');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: true
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // is_read_only - computed: true, optional: false, required: true
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }

  // is_shareable - computed: true, optional: false, required: true
  public get isShareable() {
    return this.getBooleanAttribute('is_shareable');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // use_chap - computed: true, optional: false, required: true
  public get useChap() {
    return this.getBooleanAttribute('use_chap');
  }

  // volume_id - computed: true, optional: false, required: true
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}
export interface DataOciCoreVolumeAttachmentsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreVolumeAttachments extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVolumeAttachmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume_attachments',
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
    this._volumeId = config.volumeId;
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

  // volume_attachments - computed: true, optional: false, required: true
  public volumeAttachments(index: string) {
    return new DataOciCoreVolumeAttachmentsVolumeAttachments(this, 'volume_attachments', index);
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: string;
  public get volumeId() {
    return this._volumeId;
  }
  public set volumeId(value: string | undefined) {
    this._volumeId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreVolumeAttachmentsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreVolumeAttachmentsFilter[] | undefined) {
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
      volume_id: this._volumeId,
      filter: this._filter,
    };
  }
}
