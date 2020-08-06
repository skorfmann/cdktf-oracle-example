// https://www.terraform.io/docs/providers/oci/r/data_oci_core_instances.html
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
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instances": {
        "type": [
          "list",
          [
            "object",
            {
              "agent_config": [
                "list",
                [
                  "object",
                  {
                    "is_management_disabled": "bool",
                    "is_monitoring_disabled": "bool"
                  }
                ]
              ],
              "availability_domain": "string",
              "boot_volume_id": "string",
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
              "dedicated_vm_host_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "extended_metadata": [
                "map",
                "string"
              ],
              "fault_domain": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "hostname_label": "string",
              "id": "string",
              "image": "string",
              "ipxe_script": "string",
              "is_pv_encryption_in_transit_enabled": "bool",
              "launch_mode": "string",
              "launch_options": [
                "list",
                [
                  "object",
                  {
                    "boot_volume_type": "string",
                    "firmware": "string",
                    "is_consistent_volume_naming_enabled": "bool",
                    "is_pv_encryption_in_transit_enabled": "bool",
                    "network_type": "string",
                    "remote_data_volume_type": "string"
                  }
                ]
              ],
              "metadata": [
                "map",
                "string"
              ],
              "preserve_boot_volume": "bool",
              "private_ip": "string",
              "public_ip": "string",
              "region": "string",
              "shape": "string",
              "shape_config": [
                "list",
                [
                  "object",
                  {
                    "gpu_description": "string",
                    "gpus": "number",
                    "local_disk_description": "string",
                    "local_disks": "number",
                    "local_disks_total_size_in_gbs": "number",
                    "max_vnic_attachments": "number",
                    "memory_in_gbs": "number",
                    "networking_bandwidth_in_gbps": "number",
                    "ocpus": "number",
                    "processor_description": "string"
                  }
                ]
              ],
              "source_details": [
                "list",
                [
                  "object",
                  {
                    "boot_volume_size_in_gbs": "string",
                    "kms_key_id": "string",
                    "source_id": "string",
                    "source_type": "string"
                  }
                ]
              ],
              "state": "string",
              "subnet_id": "string",
              "system_tags": [
                "map",
                "string"
              ],
              "time_created": "string",
              "time_maintenance_reboot_due": "string"
            }
          ]
        ],
        "computed": true
      },
      "state": {
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

export interface DataOciCoreInstancesConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciCoreInstancesFilter[];
}
export class DataOciCoreInstancesInstancesAgentConfig extends ComplexComputedList {

  // is_management_disabled - computed: true, optional: false, required: true
  public get isManagementDisabled() {
    return this.getBooleanAttribute('is_management_disabled');
  }

  // is_monitoring_disabled - computed: true, optional: false, required: true
  public get isMonitoringDisabled() {
    return this.getBooleanAttribute('is_monitoring_disabled');
  }
}
export class DataOciCoreInstancesInstancesCreateVnicDetails extends ComplexComputedList {

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
export class DataOciCoreInstancesInstancesLaunchOptions extends ComplexComputedList {

  // boot_volume_type - computed: true, optional: false, required: true
  public get bootVolumeType() {
    return this.getStringAttribute('boot_volume_type');
  }

  // firmware - computed: true, optional: false, required: true
  public get firmware() {
    return this.getStringAttribute('firmware');
  }

  // is_consistent_volume_naming_enabled - computed: true, optional: false, required: true
  public get isConsistentVolumeNamingEnabled() {
    return this.getBooleanAttribute('is_consistent_volume_naming_enabled');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: true
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // network_type - computed: true, optional: false, required: true
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // remote_data_volume_type - computed: true, optional: false, required: true
  public get remoteDataVolumeType() {
    return this.getStringAttribute('remote_data_volume_type');
  }
}
export class DataOciCoreInstancesInstancesShapeConfig extends ComplexComputedList {

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

  // max_vnic_attachments - computed: true, optional: false, required: true
  public get maxVnicAttachments() {
    return this.getNumberAttribute('max_vnic_attachments');
  }

  // memory_in_gbs - computed: true, optional: false, required: true
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // networking_bandwidth_in_gbps - computed: true, optional: false, required: true
  public get networkingBandwidthInGbps() {
    return this.getNumberAttribute('networking_bandwidth_in_gbps');
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
export class DataOciCoreInstancesInstancesSourceDetails extends ComplexComputedList {

  // boot_volume_size_in_gbs - computed: true, optional: false, required: true
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // source_id - computed: true, optional: false, required: true
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_type - computed: true, optional: false, required: true
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}
export class DataOciCoreInstancesInstances extends ComplexComputedList {

  // agent_config - computed: true, optional: false, required: true
  public get agentConfig() {
    return 'not implemented' as any;
  }

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

  // create_vnic_details - computed: true, optional: false, required: true
  public get createVnicDetails() {
    return 'not implemented' as any;
  }

  // dedicated_vm_host_id - computed: true, optional: false, required: true
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // extended_metadata - computed: true, optional: false, required: true
  public get extendedMetadata() {
    return 'not implemented' as any;
  }

  // fault_domain - computed: true, optional: false, required: true
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
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

  // image - computed: true, optional: false, required: true
  public get image() {
    return this.getStringAttribute('image');
  }

  // ipxe_script - computed: true, optional: false, required: true
  public get ipxeScript() {
    return this.getStringAttribute('ipxe_script');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: true
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // launch_mode - computed: true, optional: false, required: true
  public get launchMode() {
    return this.getStringAttribute('launch_mode');
  }

  // launch_options - computed: true, optional: false, required: true
  public get launchOptions() {
    return 'not implemented' as any;
  }

  // metadata - computed: true, optional: false, required: true
  public get metadata() {
    return 'not implemented' as any;
  }

  // preserve_boot_volume - computed: true, optional: false, required: true
  public get preserveBootVolume() {
    return this.getBooleanAttribute('preserve_boot_volume');
  }

  // private_ip - computed: true, optional: false, required: true
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: true
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: true
  public get shapeConfig() {
    return 'not implemented' as any;
  }

  // source_details - computed: true, optional: false, required: true
  public get sourceDetails() {
    return 'not implemented' as any;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // system_tags - computed: true, optional: false, required: true
  public get systemTags() {
    return 'not implemented' as any;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_maintenance_reboot_due - computed: true, optional: false, required: true
  public get timeMaintenanceRebootDue() {
    return this.getStringAttribute('time_maintenance_reboot_due');
  }
}
export interface DataOciCoreInstancesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreInstances extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instances',
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
    this._displayName = config.displayName;
    this._state = config.state;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instances - computed: true, optional: false, required: true
  public instances(index: string) {
    return new DataOciCoreInstancesInstances(this, 'instances', index);
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreInstancesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreInstancesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
