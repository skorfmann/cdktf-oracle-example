// https://www.terraform.io/docs/providers/oci/r/data_oci_ocvp_sddcs.html
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
      "compute_availability_domain": {
        "type": "string",
        "optional": true
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
      "sddc_collection": {
        "type": [
          "list",
          [
            "object",
            {
              "actual_esxi_hosts_count": "number",
              "compartment_id": "string",
              "compute_availability_domain": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "esxi_hosts_count": "number",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "instance_display_name_prefix": "string",
              "nsx_edge_uplink1vlan_id": "string",
              "nsx_edge_uplink2vlan_id": "string",
              "nsx_edge_uplink_ip_id": "string",
              "nsx_edge_vtep_vlan_id": "string",
              "nsx_manager_fqdn": "string",
              "nsx_manager_initial_password": "string",
              "nsx_manager_private_ip_id": "string",
              "nsx_manager_username": "string",
              "nsx_overlay_segment_name": "string",
              "nsx_vtep_vlan_id": "string",
              "provisioning_subnet_id": "string",
              "ssh_authorized_keys": "string",
              "state": "string",
              "time_created": "string",
              "time_updated": "string",
              "vcenter_fqdn": "string",
              "vcenter_initial_password": "string",
              "vcenter_private_ip_id": "string",
              "vcenter_username": "string",
              "vmotion_vlan_id": "string",
              "vmware_software_version": "string",
              "vsan_vlan_id": "string",
              "vsphere_vlan_id": "string",
              "workload_network_cidr": "string"
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

export interface DataOciOcvpSddcsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly computeAvailabilityDomain?: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciOcvpSddcsFilter[];
}
export class DataOciOcvpSddcsSddcCollection extends ComplexComputedList {

  // actual_esxi_hosts_count - computed: true, optional: false, required: true
  public get actualEsxiHostsCount() {
    return this.getNumberAttribute('actual_esxi_hosts_count');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_availability_domain - computed: true, optional: false, required: true
  public get computeAvailabilityDomain() {
    return this.getStringAttribute('compute_availability_domain');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // esxi_hosts_count - computed: true, optional: false, required: true
  public get esxiHostsCount() {
    return this.getNumberAttribute('esxi_hosts_count');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_display_name_prefix - computed: true, optional: false, required: true
  public get instanceDisplayNamePrefix() {
    return this.getStringAttribute('instance_display_name_prefix');
  }

  // nsx_edge_uplink1vlan_id - computed: true, optional: false, required: true
  public get nsxEdgeUplink1VlanId() {
    return this.getStringAttribute('nsx_edge_uplink1vlan_id');
  }

  // nsx_edge_uplink2vlan_id - computed: true, optional: false, required: true
  public get nsxEdgeUplink2VlanId() {
    return this.getStringAttribute('nsx_edge_uplink2vlan_id');
  }

  // nsx_edge_uplink_ip_id - computed: true, optional: false, required: true
  public get nsxEdgeUplinkIpId() {
    return this.getStringAttribute('nsx_edge_uplink_ip_id');
  }

  // nsx_edge_vtep_vlan_id - computed: true, optional: false, required: true
  public get nsxEdgeVtepVlanId() {
    return this.getStringAttribute('nsx_edge_vtep_vlan_id');
  }

  // nsx_manager_fqdn - computed: true, optional: false, required: true
  public get nsxManagerFqdn() {
    return this.getStringAttribute('nsx_manager_fqdn');
  }

  // nsx_manager_initial_password - computed: true, optional: false, required: true
  public get nsxManagerInitialPassword() {
    return this.getStringAttribute('nsx_manager_initial_password');
  }

  // nsx_manager_private_ip_id - computed: true, optional: false, required: true
  public get nsxManagerPrivateIpId() {
    return this.getStringAttribute('nsx_manager_private_ip_id');
  }

  // nsx_manager_username - computed: true, optional: false, required: true
  public get nsxManagerUsername() {
    return this.getStringAttribute('nsx_manager_username');
  }

  // nsx_overlay_segment_name - computed: true, optional: false, required: true
  public get nsxOverlaySegmentName() {
    return this.getStringAttribute('nsx_overlay_segment_name');
  }

  // nsx_vtep_vlan_id - computed: true, optional: false, required: true
  public get nsxVtepVlanId() {
    return this.getStringAttribute('nsx_vtep_vlan_id');
  }

  // provisioning_subnet_id - computed: true, optional: false, required: true
  public get provisioningSubnetId() {
    return this.getStringAttribute('provisioning_subnet_id');
  }

  // ssh_authorized_keys - computed: true, optional: false, required: true
  public get sshAuthorizedKeys() {
    return this.getStringAttribute('ssh_authorized_keys');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // vcenter_fqdn - computed: true, optional: false, required: true
  public get vcenterFqdn() {
    return this.getStringAttribute('vcenter_fqdn');
  }

  // vcenter_initial_password - computed: true, optional: false, required: true
  public get vcenterInitialPassword() {
    return this.getStringAttribute('vcenter_initial_password');
  }

  // vcenter_private_ip_id - computed: true, optional: false, required: true
  public get vcenterPrivateIpId() {
    return this.getStringAttribute('vcenter_private_ip_id');
  }

  // vcenter_username - computed: true, optional: false, required: true
  public get vcenterUsername() {
    return this.getStringAttribute('vcenter_username');
  }

  // vmotion_vlan_id - computed: true, optional: false, required: true
  public get vmotionVlanId() {
    return this.getStringAttribute('vmotion_vlan_id');
  }

  // vmware_software_version - computed: true, optional: false, required: true
  public get vmwareSoftwareVersion() {
    return this.getStringAttribute('vmware_software_version');
  }

  // vsan_vlan_id - computed: true, optional: false, required: true
  public get vsanVlanId() {
    return this.getStringAttribute('vsan_vlan_id');
  }

  // vsphere_vlan_id - computed: true, optional: false, required: true
  public get vsphereVlanId() {
    return this.getStringAttribute('vsphere_vlan_id');
  }

  // workload_network_cidr - computed: true, optional: false, required: true
  public get workloadNetworkCidr() {
    return this.getStringAttribute('workload_network_cidr');
  }
}
export interface DataOciOcvpSddcsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciOcvpSddcs extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOcvpSddcsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_sddcs',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._computeAvailabilityDomain = config.computeAvailabilityDomain;
    this._displayName = config.displayName;
    this._state = config.state;
    this._filter = config.filter;
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

  // compute_availability_domain - computed: false, optional: true, required: false
  private _computeAvailabilityDomain?: string;
  public get computeAvailabilityDomain() {
    return this._computeAvailabilityDomain;
  }
  public set computeAvailabilityDomain(value: string | undefined) {
    this._computeAvailabilityDomain = value;
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

  // sddc_collection - computed: true, optional: false, required: true
  public sddcCollection(index: string) {
    return new DataOciOcvpSddcsSddcCollection(this, 'sddc_collection', index);
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
  private _filter?: DataOciOcvpSddcsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciOcvpSddcsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      compute_availability_domain: this._computeAvailabilityDomain,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
