// https://www.terraform.io/docs/providers/oci/r/data_oci_core_shape.html
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
      "image_id": {
        "type": "string",
        "optional": true
      },
      "shapes": {
        "type": [
          "list",
          [
            "object",
            {
              "gpu_description": "string",
              "gpus": "number",
              "local_disk_description": "string",
              "local_disks": "number",
              "local_disks_total_size_in_gbs": "number",
              "max_vnic_attachment_options": [
                "list",
                [
                  "object",
                  {
                    "default_per_ocpu": "number",
                    "max": "number",
                    "min": "number"
                  }
                ]
              ],
              "max_vnic_attachments": "number",
              "memory_in_gbs": "number",
              "memory_options": [
                "list",
                [
                  "object",
                  {
                    "default_per_ocpu_in_gbs": "number",
                    "max_in_gbs": "number",
                    "min_in_gbs": "number"
                  }
                ]
              ],
              "name": "string",
              "networking_bandwidth_in_gbps": "number",
              "networking_bandwidth_options": [
                "list",
                [
                  "object",
                  {
                    "default_per_ocpu_in_gbps": "number",
                    "max_in_gbps": "number",
                    "min_in_gbps": "number"
                  }
                ]
              ],
              "ocpu_options": [
                "list",
                [
                  "object",
                  {
                    "max": "number",
                    "min": "number"
                  }
                ]
              ],
              "ocpus": "number",
              "processor_description": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciCoreShapeConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  readonly imageId?: string;
  /** filter block */
  readonly filter?: DataOciCoreShapeFilter[];
}
export class DataOciCoreShapeShapesMaxVnicAttachmentOptions extends ComplexComputedList {

  // default_per_ocpu - computed: true, optional: false, required: true
  public get defaultPerOcpu() {
    return this.getNumberAttribute('default_per_ocpu');
  }

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export class DataOciCoreShapeShapesMemoryOptions extends ComplexComputedList {

  // default_per_ocpu_in_gbs - computed: true, optional: false, required: true
  public get defaultPerOcpuInGbs() {
    return this.getNumberAttribute('default_per_ocpu_in_gbs');
  }

  // max_in_gbs - computed: true, optional: false, required: true
  public get maxInGbs() {
    return this.getNumberAttribute('max_in_gbs');
  }

  // min_in_gbs - computed: true, optional: false, required: true
  public get minInGbs() {
    return this.getNumberAttribute('min_in_gbs');
  }
}
export class DataOciCoreShapeShapesNetworkingBandwidthOptions extends ComplexComputedList {

  // default_per_ocpu_in_gbps - computed: true, optional: false, required: true
  public get defaultPerOcpuInGbps() {
    return this.getNumberAttribute('default_per_ocpu_in_gbps');
  }

  // max_in_gbps - computed: true, optional: false, required: true
  public get maxInGbps() {
    return this.getNumberAttribute('max_in_gbps');
  }

  // min_in_gbps - computed: true, optional: false, required: true
  public get minInGbps() {
    return this.getNumberAttribute('min_in_gbps');
  }
}
export class DataOciCoreShapeShapesOcpuOptions extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export class DataOciCoreShapeShapes extends ComplexComputedList {

  // gpu_description - computed: true, optional: false, required: true
  public get gpuDescription() {
    return this.getStringAttribute('gpu_description');
  }

  // gpus - computed: true, optional: false, required: true
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }

  // local_disk_description - computed: true, optional: false, required: true
  public get localDiskDescription() {
    return this.getStringAttribute('local_disk_description');
  }

  // local_disks - computed: true, optional: false, required: true
  public get localDisks() {
    return this.getNumberAttribute('local_disks');
  }

  // local_disks_total_size_in_gbs - computed: true, optional: false, required: true
  public get localDisksTotalSizeInGbs() {
    return this.getNumberAttribute('local_disks_total_size_in_gbs');
  }

  // max_vnic_attachment_options - computed: true, optional: false, required: true
  public get maxVnicAttachmentOptions() {
    return 'not implemented' as any;
  }

  // max_vnic_attachments - computed: true, optional: false, required: true
  public get maxVnicAttachments() {
    return this.getNumberAttribute('max_vnic_attachments');
  }

  // memory_in_gbs - computed: true, optional: false, required: true
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // memory_options - computed: true, optional: false, required: true
  public get memoryOptions() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // networking_bandwidth_in_gbps - computed: true, optional: false, required: true
  public get networkingBandwidthInGbps() {
    return this.getNumberAttribute('networking_bandwidth_in_gbps');
  }

  // networking_bandwidth_options - computed: true, optional: false, required: true
  public get networkingBandwidthOptions() {
    return 'not implemented' as any;
  }

  // ocpu_options - computed: true, optional: false, required: true
  public get ocpuOptions() {
    return 'not implemented' as any;
  }

  // ocpus - computed: true, optional: false, required: true
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // processor_description - computed: true, optional: false, required: true
  public get processorDescription() {
    return this.getStringAttribute('processor_description');
  }
}
export interface DataOciCoreShapeFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreShape extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreShapeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_shape',
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
    this._imageId = config.imageId;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string;
  public get imageId() {
    return this._imageId;
  }
  public set imageId(value: string | undefined) {
    this._imageId = value;
  }

  // shapes - computed: true, optional: false, required: true
  public shapes(index: string) {
    return new DataOciCoreShapeShapes(this, 'shapes', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreShapeFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreShapeFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      image_id: this._imageId,
      filter: this._filter,
    };
  }
}
